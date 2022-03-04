import React, { useRef } from 'react';

const AddEvent = () => {
    const titleRef = useRef('');
    const descRef = useRef('');
    const dateRef = useRef('');

    const currentDate = new Date().toISOString().slice(0, 10);

    const handlleFile = (e) => {
        e.preventDefault();
        // console.log(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const description = descRef.current.value;
        const date = dateRef.current.value;

        const event = { title, description, date };

        fetch('https://volunteernetwork-vn.herokuapp.com/events', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);

                titleRef.current.value = '';
                descRef.current.value = '';

            });
    };

    return (
        <div className='event__details'>
            <form className='add__event' onSubmit={handleSubmit} action="">
                <div className="form__fields">
                    <div className='form__left'>
                        <label htmlFor="title">Event Title</label>
                        <input type="text" ref={titleRef} id='title' name='title' placeholder='Event Title'
                            required />
                        <label htmlFor="desc">Event Description</label>
                        <textarea name="desc" ref={descRef} id="desc" cols="30" rows="5"
                            placeholder='Event Description' required></textarea>
                    </div>
                    <div className='form__right'>
                        <label htmlFor="date">Event Date</label>
                        <input type="date" ref={dateRef} name="date" defaultValue={currentDate} id="date"
                            required />
                        <label htmlFor="banner">Banner</label>
                        <input type="file" onChange={handlleFile} name="banner" id="banner"
                            accept="image/png, image/jpeg" />
                    </div>
                </div>
                <input type="submit" className='add__event__submit' value="Submit" />
            </form>
        </div>
    );
};

export default AddEvent;