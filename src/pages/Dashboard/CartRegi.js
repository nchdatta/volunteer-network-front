import React from 'react';
import img from '../../Utilities/images/cleanWater.png'

const CartRegi = (props) => {
    const { id, event, date, handleDeleteRegEvent } = props;
    return (
        <div className="card__regi">
            <div><img src={img} alt="" /></div>
            <div className="card__regi__content">
                <h2>{event}</h2>
                <h4>{date}</h4>
            </div>
            <button className='btn__cancel' onClick={() => handleDeleteRegEvent(id)}>Cancel</button>
        </div>
    );
};

export default CartRegi;