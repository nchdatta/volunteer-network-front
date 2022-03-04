import React from 'react';
import HeroSection from './HeroSection';
import NavBar from './NavBar';

const Header = ({ handleSearch }) => {
    return (
        <header className='header__wrapper'>
            <NavBar></NavBar>
            <HeroSection handleSearch={handleSearch}></HeroSection>
        </header>
    );
};

export default Header;