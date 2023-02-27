import React from 'react';
import Image from 'next/image';
import Skeleton from '../../Skeleton';
import { useState } from 'react';
import Star from '../../../../icons/star-solid.svg';

const ProductCard = ({product}) => {

    const myLoader = ({ src, width, quality }) => {
        return `https://i.ibb.co/${src}`
      }

    return (
        <div  className="product-card" >

             {
                  product.star > 0  ?    <div className="stars">
                                                             <Image
                                                             src={Star}
                                                             alt="top pd"
                                                             objectFit="contain"
                                                             width={10}
                                                             height={10}
                                                             /> 

                                                            <p>{product.star}</p> 
                                           </div>:
                                           
                                           ""
                                                  }
           <span>
                                             <Image
                                                   src={product.url[0].url}
                                                   alt="top pd"
                                                   objectFit="contain"
                                                   width={500}
                                                   height={500}
                                                   loader={myLoader}
                                                 />   
           </span>


           <div className="card-body text-l">
           <div className="card-title">
           <p>{`${product.title.slice(0, 40)}...`}</p>
           </div>

           <p className="pd-price"> <span className="text-bold">৳</span> {product.productPrice.highQunPrice} </p>
           </div>

        </div>
    );
};

export default ProductCard;