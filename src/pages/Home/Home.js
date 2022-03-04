import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import EventCarts from '../Events/EventCarts';
import Footer from '../Footer/Footer';

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://volunteernetwork-vn.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data));

    }, []);

    const handleSearch = (value) => {
        if (value !== '') {
            console.log(value);
            fetch(`https://volunteernetwork-vn.herokuapp.com/events/filter?q=${value}`)
                .then(res => res.json())
                .then(data => {
                    setEvents(data);
                });
        }
    }

    return (
        <>
            <Header handleSearch={handleSearch} />
            <EventCarts events={events} />
            <Footer />
        </>
    );
};

export default Home;