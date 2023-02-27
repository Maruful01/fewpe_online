import React, { useContext } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';
import { UserContext } from '../../GlobalProvider';

const TopNav = () => {



    return (
        <div className="top-nav">
            <ul className="ul">

               <li className="top-nav-box">        
                       <Link href="/authentication"><a> 
                        <span>Signup / Login</span>
                        </a></Link>
               </li>
            </ul>
        </div>
    );
};

export default TopNav;