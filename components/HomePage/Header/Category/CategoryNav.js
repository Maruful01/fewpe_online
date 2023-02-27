import React, { useState } from 'react';
// import {
//     useWindowSize,
//     useWindowWidth,
//     useWindowHeight,
//   } from '@react-hook/window-size'
import category from './category.json';
import SubCtg from './SubCtg';

const CategoryNav = ({home}) => {

    return (
        <div className="category-nav nav-component d-flex justify-content-center">
            <ul className="ul flex-street li-m10">
                    <span className="ul flex-street li-m10">
                    <br />
                    <li>{"Today's"} Deals</li>
                    <li>Sell</li>
                    
                    {
                        category.map (cat => <li key={cat.id}> {cat.title} 
                        <span className='sub-ctg'>
                        <SubCtg ctg= {cat.subCtg} />
                        </span>
                        </li>)
                    }

                    </span>

                    
            </ul>
        </div>
    );
};

export default CategoryNav;