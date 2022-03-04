import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import logo from '../../Utilities/logos/logo.png';

const AdminDashboard = () => {
    const location = useLocation();
    return (
        <div className='dashboard__wrapper'>
            <div className="dashboard__title__nav">
                <div className="logo__wrap">
                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                </div>
                <h2>{
                    location.pathname === "/dashboard" ? "Dashboard" : location.pathname.split('/')[2]
                }
                </h2>
            </div>

            <div className="dashboard__row">
                <div className="dash__left">
                    <div className="dash__nav">
                        <Link className='dash__link active' to=""><i className="fa-solid fa-tally-3"></i> Dashboard</Link>
                        <Link className='dash__link' to="volunteer-list"><i className="fa-solid fa-user-group"></i> Volunteer register list</Link>
                        <Link className='dash__link' to="add-event"><i className="fa-solid fa-plus"></i> Add event</Link>
                    </div>
                </div>
                <div className="dash__right">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;