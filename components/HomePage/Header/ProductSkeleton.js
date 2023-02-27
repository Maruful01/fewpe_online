import React from 'react';
import Image from 'next/image';
import emptyImg from '../../../components/logo.png';

const ProductSkeleton = () => {
      
    const pdSkeleton = [ {id: "1" , value: emptyImg}, {id: "2" , value: emptyImg}, {id: "3" , value: emptyImg}, {id: "4" , value: emptyImg}, {id: "5" , value: emptyImg} ];
    return (
        <div  className="products-component sk-width">

            {
                pdSkeleton.map (pd => 
                    
                    <div key={pd.id} className="product-card empty-image-loader" >
                                             <Image
                                                   src={pd.value}
                                                   alt="top pd"
                                                   objectFit="contain"
                                                   width={100}
                                                   height={180}
                                                 />   

                                               <div className='second-skeleton skeleton-animation'>

                                               </div>

                                               <div className='third-skeleton skeleton-animation'>

                                               </div>
                    </div>
                    
                    )
            }
            
        </div>
    );
};

export default ProductSkeleton;