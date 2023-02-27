import React from 'react';
import category from './category.json';
import Image from 'next/image';
import Link from 'next/link';
import User from "../../../../icons/user-cog-solid.svg";

const SideBar = () => {
    const home = "Home";
    return (
        <div className="side-bar-component">
           <ul>            
                    {
                        category.map (cat => <li key={cat.id}> {cat.title} <span className="plus">+</span> </li>)
                    }
           </ul>
        </div>
    );
};

export default SideBar;