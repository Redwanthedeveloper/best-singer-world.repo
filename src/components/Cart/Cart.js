import React from 'react';
import './Cart.css';

const Cart = (props) => {
    return (
        <div>
            <h3>Singer Seleted :{props.cart.length}</h3>
            <h3> Total Cost</h3>
        </div>
    );
};

export default Cart;