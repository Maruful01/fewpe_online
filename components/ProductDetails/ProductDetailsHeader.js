import React from 'react';
import Image from 'next/image';
import arrowLeft from '../../icons/arrow-left-solid.svg';
import cartIco from '../../icons/shopping-cart-solid.svg';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { historyBack } from '../../functions/globalFunctions';

const ProductDetailsHeader = ({cartItems, isCartValid}) => {

    return (
        <div>
             <div className="product-detail-header">
                 <ul>

                    <li onClick={() => historyBack()}> 
                          <Image
                              src={arrowLeft}
                              alt="arrow-left"
                              height={50}
                              width={50}
                           />
                     </li>


                     <li style={{display: isCartValid}}> 
                       
                     <Link href={"/cart"}><a>  
                       <span  className="options-cart-value position-rl">{cartItems ? cartItems.length : 0}</span>
                      <Image
                              src={cartIco}
                              alt="cart-left"
                              height={50}
                              width={50}
                           />
                    </a></Link>                    
                       </li>


         </ul>

          </div>
        </div>
    );
};

export default ProductDetailsHeader;