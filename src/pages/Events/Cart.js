import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Utilities/images/childSupport.png'

const Cart = (props) => {
    const { title, _id } = props.event;

    return (
        <Link to={`/register/${_id}`}>
            <div className='card'>
                <img src={img} alt={title} />
                <div className='cart__content'>
                    <h2>{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Cart;