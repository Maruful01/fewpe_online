import React, { useState } from 'react';
import logo from '../../logo.png';
import Image from 'next/image';
import Link from 'next/link';
import cart from '../../../icons/shopping-cart-solid.svg';
import TopNav from './TopNav';
import SideBar from './Category/SideBar';
import Bar from '../../../icons/icons8-menu.svg';
import Search from '../../../icons/icons8-search.svg';
import { Drawer, Space } from 'antd';

const NavBar = ({cartItems}) => {

    const [visible, setVisible] = useState(false);
    const [placement, setPlacement] = useState('left');
  
    const showDrawer = () => {
      setVisible(true);
    };
  
    const onChange = (e) => {
      setPlacement(e.target.value);
    };
  
    const onClose = () => {
      setVisible(false);
    };
    return (
        <section>
        {/* <TopNav/> */}
        <div className="nav-bar">

        {/* // Left side toggle bar and category list for small screen___________________________________*/}
         <div className="side-bar">
         <Space>
         <span className="bar"><Image src={Bar} onClick={showDrawer} alt="" /></span> 
         </Space>

         <Drawer
              extra={
                <div className="logo hide-logo">
                <Image
                placement={placement}
                src={logo}
                alt="Picture of the author"
                />
               </div>
                    }
          
           placement={placement}
           width={380}
           onClose={onClose}
           visible={visible}
          >

        <SideBar/>
        </Drawer>
      </div>
      {/* // Left side toggle bar and category list for small screen___________________________________*/}

        <div className="nav-component d-flex justify-content-center">
            <div className="logo">
            <Image
             src={logo}
             alt="Picture of the author"
            />
        </div>

        <div className="form-component">
                <form action="" method="get">
                <input className="search" type="search" name="" id="" placeholder="Search in fewpe" />
                <Link href="/"><a>
                <button className="submit"> <span className="search-bar"><Image src={Search} alt="" /></span></button>
                </a></Link>   
                </form>
          </div>

           
             {cartItems ? 
           <div className="shopping-cart">
           <Link  href="/cart"><a>
           <Image
            src={cart}
            alt="Picture of the author"
            />
            <span className="cart-value" >{cartItems ? cartItems.length : 0}</span>    
            </a></Link>    
            </div> : ""}
           
           </div>
           </div>
    </section>
    );
};



export default NavBar;