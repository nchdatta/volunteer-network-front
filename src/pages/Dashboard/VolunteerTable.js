import React, { useEffect, useState } from 'react';

const VolunteerTable = () => {
    const [volunteers, setVolunteers] = useState([]);
    useEffect(() => {
        fetch('https://volunteernetwork-vn.herokuapp.com/volunteers')
            .then(res => res.json())
            .then(volunteer => setVolunteers(volunteer));

    }, [volunteers]);


    const removeVolunteer = (id) => {

        const response = window.confirm("Would you like to remove the volunteer?");

        response &&
            fetch(`https://volunteernetwork-vn.herokuapp.com/volunteers/${id}`, {
                method: 'DELETE',
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => console.log(data));
        ;

    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Registering Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>

                {
                    volunteers.map(volunteer => <tr key={volunteer._id}>
                        <td>{volunteer.name}</td>
                        <td>{volunteer.email}</td>
                        <td>{volunteer.regisDate}</td>
                        <td><i className="fa-regular fa-trash-can"
                            onClick={() => removeVolunteer(volunteer._id)}></i></td>
                    </tr>)
                }





                {/* <tr>
                    <td>Naieem</td>
                    <td>naieem@gmail.com</td>
                    <td>22-01-22</td>
                    <td><i className="fa-regular fa-trash-can"></i></td>
                </tr>
                <tr>
                    <td>Naieem</td>
                    <td>naieem@gmail.com</td>
                    <td>22-01-22</td>
                    <td><i className="fa-regular fa-trash-can"></i></td>
                </tr> */}
            </tbody>
        </table>
    );
};

export default VolunteerTable;