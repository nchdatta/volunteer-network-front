import { useEffect, useState } from 'react';

const useVolunteers = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch('https://volunteernetwork-vn.herokuapp.com/volunteers')
            .then(res => res.json())
            .then(data => setVolunteers(data));

    }, []);

    return {
        volunteers,
        setVolunteers
    };
};

export default useVolunteers;