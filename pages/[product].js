import React, { useReducer, useState } from 'react';
import Product from '../components/ProductDetails/Product';
import OrderNow from '../components/ProductDetails/OrderNow';

export const getStaticPaths = async () => {

    const res = await fetch (`https://www.dhakdum.com/api/products`, {
      method: 'GET',
      headers: {

          'Content-Type': 'application/json'
      },
  });
  
    const data = await res.json();
  
    const paths = data.map (pd => {
      return {
        params: {product: pd._id.toString()},
      }
    })
    return {
  
      paths,
      fallback: false
  
    }
  }
  
  export const getStaticProps = async (context) => {

    const productId = context.params.product;
  
    const res = await fetch (`https://www.dhakdum.com/api/products/${productId}`, {
      method: 'GET',
      headers: {
        
          'Content-Type': 'application/json'
      },
  });
  
    const productData = await res.json();
  
    return {
  
      props: { product: productData},
      revalidate: 60,
  
    }
  } 


const ProductDetails = ({product}) => { 
  const [order, setOrder] = useState(false);

  const [colorAndQty, setColorAndQty] = useState();
    return (
      <section>
        {
          order ? <OrderNow colorAndQty={colorAndQty} product={product}/> : <Product setColorAndQty={setColorAndQty} product={product} setOrder={setOrder}/>
        }

      </section>
    );
};

export default ProductDetails;