
import React, { useEffect, useState } from 'react';
import Singer from '../Singer/Singer'
import './Singers.css';
import Cart from '../Cart/Cart';


const Singers = () => {

    const [singers, setSingers] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => {
                setSingers(data);
                console.log(data);
            });
    }, []);
    console.log(singers);


    const addToCart = (singer) => {

        if (createImageBitmap.length !== 0) {
            for (const item of cart) {
                if (item.id === singer.id) {
                    alert(`Alreday Added!`);
                    return;
                }
            }
        }
        const newCart = [...cart, Singer];
        setCart(newCart);
    }
    console.log(singers);

    return (
        <div className="main-container">
            <div className="singers-container">
                {
                    singers.map(singer => <Singer singer={singer} />)
                    
                }
                <div className="cart-container">
                    <h3>Singers Selected</h3>
                    <h3> Total Cost</h3>

                </div>

            </div>

        </div>
    );
};

export default Singer;
