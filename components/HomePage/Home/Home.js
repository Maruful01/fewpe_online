import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Skeleton from '../Skeleton';
import ProductCard from './productCard/ProductCard';
import ProductSkeleton from '../Header/ProductSkeleton';
import Link from 'next/link';
import { DatabaseOutlined  } from '@ant-design/icons';



const Home = ({products}) => {

  const [selectedId, setSelectedId] = useState(0);

    return (
        <section>
            <div className="featured-products">
            {/* <DatabaseOutlined /> */}
            <h5 className="featured-title">Featured Products</h5>

          <div>
            <h5 style={{color: selectedId === 0 ? 'red' : 'black' }} onClick={() => setSelectedId(0)}>Capes</h5> 
            <h5 style={{color: selectedId === 1 ? 'red' : 'black' }} onClick={() => setSelectedId(1)}>Sunglases</h5>
            <h5 style={{color: selectedId === 2 ? 'red' : 'black' }} onClick={() => setSelectedId(2)}>T-Shirts</h5>
            <h5 style={{color: selectedId === 3 ? 'red' : 'black' }} onClick={() => setSelectedId(3)}>Smart Watches</h5>
            <h5 style={{color: selectedId === 4 ? 'red' : 'black' }} onClick={() => setSelectedId(4)}>{'Health & Beauty'}</h5>
            </div>

        
            </div>
            
            <div   className="products-component">
                           {
                              products.map (product => 
                             
                             <div  key={product._id}>
                             <Link href={`/${product._id}`}><a> <ProductCard key={product._id} product={product}/>  </a></Link>  
                             </div> 
                             
                             ) 
                           }             
           </div>
        </section>
    );
};

export default Home;