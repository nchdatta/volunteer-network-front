import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useVolunteers from '../../hooks/useVolunteers';
import Footer from '../Footer/Footer';
import NavBar from '../Header/NavBar';
import CartRegi from './CartRegi';

const UserDashboard = () => {
    const { user } = useAuth();
    const { volunteers, setVolunteers } = useVolunteers();
    const volunteerMatched = volunteers.filter(v => v.email === user?.email);

    const handleDeleteRegEvent = (id) => {
        const ans = window.confirm("Would you like to cancel?");
        ans &&
            fetch(`https://volunteernetwork-vn.herokuapp.com/volunteers/${id}`, {
                method: 'DELETE',
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(result => setVolunteers(result));

    }

    return (
        <>
            <NavBar />
            <div className="user__dashboard">
                <div className="container">
                    <h3 className='my-3 text-skyblue fs-1'>List of events you registered</h3>

                    <div className="card__wrap">
                        {
                            volunteerMatched.map(volunteer => <CartRegi
                                key={volunteer._id}
                                id={volunteer._id}
                                event={volunteer.event}
                                date={volunteer.regisDate.split('T')[0]}
                                handleDeleteRegEvent={handleDeleteRegEvent} />)
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default UserDashboard;