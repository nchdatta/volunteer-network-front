import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useEvents from '../hooks/useEvents';
import logo from '../Utilities/logos/logo.png';


const Register = () => {
    const { user } = useAuth();
    const { events } = useEvents();
    const nameRef = useRef('');
    const emailRef = useRef('');
    const descRef = useRef('');
    const eventNameRef = useRef('');
    const [res, setRes] = useState(true);

    const currentDate = new Date().toISOString().slice(0, 10);
    const { id } = useParams();
    const event = events.find(e => e._id === id);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const description = descRef.current.value;
        const event = eventNameRef.current.value;

        const volunteer = {
            name, email, description, regisDate: currentDate, event
        };

        fetch('https://volunteernetwork-vn.herokuapp.com/volunteers', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(volunteer)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRes(false);
            });



    }

    return (
        <div className="register__wrapper">
            <div className="container">
                <div className="regis__wrap">
                    <div className="logo__top">
                        <Link to="/"><img src={logo} alt="Logo" /></Link>
                    </div>
                    <div className="regis__content">
                        <h2>Register as a Volunteer</h2>
                        <form className='regis__form' action="/dashboard" onSubmit={handleRegister} >
                            <input type="text" ref={nameRef} className='name' defaultValue={user.displayName}
                                placeholder='Full Name' required />
                            <input type="email" ref={emailRef} className='email' defaultValue={user?.email}
                                placeholder='Enter email address' required />
                            <input type="text" ref={descRef} className='desc'
                                placeholder='Description of yours' required />
                            <input type="text" ref={eventNameRef} className='event-name'
                                defaultValue={event?.title || null} placeholder='Event Name' required />
                            <input type="submit" className='regi__btn' value="Registration" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;