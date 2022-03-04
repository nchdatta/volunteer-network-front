import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../Utilities/logos/logo.png'

const NavBar = () => {
    const { user, logOut } = useAuth();
    const [open, setOpen] = useState(false);


    return (
        <nav id='navbar' className='navbar__wrapper'>
            <div className="container">
                <div className="navbar">
                    <div className='logo__wrap'>
                        <Link to="/" className='logo'>
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>

                    <span className="toggle__btn">{
                        open ?
                            <i className="fa-solid fa-xmark" onClick={() => setOpen(false)}></i>
                            : <i className="fa-solid fa-bars-staggered" onClick={() => setOpen(true)}></i>
                    }</span>

                    <ul className={open ? 'nav__items toggle' : 'nav__items'}>
                        <li><Link to="/" className='nav__link'>Home</Link></li>
                        <li><Link to="#" className='nav__link'>Donation</Link></li>
                        <li><Link to="/events" className='nav__link'>Events</Link></li>
                        <li><Link to="#" className='nav__link'>News</Link></li>
                        {user.email && <li><Link to="/dashboard" className='nav__link'>Dashboard</Link></li>}
                        {user.email && <li><Link to="#" className='nav__link text-skyblue'>{user.displayName}</Link></li>}
                        {user.email ? <button onClick={logOut} className='btn btn-fill'>Logout</button>
                            : <li><Link to="/login" className='nav__link btn btn-fill'>Login</Link></li>}

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;