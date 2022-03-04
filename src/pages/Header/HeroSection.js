import React, { useRef } from 'react';

const HeroSection = ({ handleSearch }) => {
    const queryRef = useRef('');

    return (
        <div className='hero__wrapper'>
            <div className="container">
                <div className="row">
                    <h1 className='hero__title'>I grow by helping people in need.</h1>
                    <div className="input__group">
                        <input type="text" ref={queryRef} placeholder='Search...'
                            className='input__text' />
                        <input type="submit" value="Search" onClick={() => handleSearch(queryRef.current.value)} className='search__btn' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;