import React, { useState, useEffect } from 'react';
import Cart from '../../../icons/shopping-cart-solid.svg';
import Message from '../../../icons/user-cog-solid.svg';
import Home from '../../../icons/icons8-home.svg';
import Image from 'next/image';
import Link from 'next/link';
import GrayHome from '../../../icons/gray-options/icons8-home.svg';
import GrayMessage from '../../../icons/gray-options/user-cog-solid.svg';
import GrayCart from '../../../icons/gray-options/shopping-cart-solid.svg';
import { useSelector } from 'react-redux';
// import User from '../../../icons/user-solid.svg';
// import GrayUser from '../../../icons/gray-options/user-solid.svg';
const Options = () => {
    
    const [blue, setBlue] = useState("/");
    const [cartItems, setCartItems] = useState(0);

    const cart = useSelector((state) => state.cart);

    useEffect(() => {
      setCartItems(cart.cartItems);
    });

    return (
        <div className="options-component">
                <ul>
                <Link href="/"><a>
                <li><Image className="options" onClick={() => setBlue("/")} src={blue === "/" ? Home : GrayHome} alt="" /></li>
                </a></Link>

                <Link href="/profile"><a>
                <li className="mar-l-r"> <Image className="options" onClick={() => setBlue("/message")} src={blue === "/message" ? Message : GrayMessage }  alt="" /> </li>
                </a></Link>
                
                <Link href="/cart"><a>
                <li onClick={() => setBlue("/cart")}> <span className="options-cart-value">{cartItems ? cartItems.length : 0}</span> <Image className="options"  src={blue === "/cart" ? Cart :  GrayCart} alt="" /> </li>
                </a></Link>  
                </ul>
        </div>
    );
};

export default Options;