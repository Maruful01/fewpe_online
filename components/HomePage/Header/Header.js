import React from 'react';
import CategoryNav from './Category/CategoryNav';
import TopNav from './TopNav';

const Header = (props) => {
    return (
        <div>
            <CategoryNav home={props.home}/>
        </div>
    );
};

export default Header;