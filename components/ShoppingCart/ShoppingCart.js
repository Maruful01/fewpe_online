import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import SelectedProduct from './selectedProduct';
import { Spin, Empty} from 'antd';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NavBar from '../HomePage/Header/NavBar'
import { UserContext } from '../GlobalProvider';

const ShoppingCart = () => {

  const {cartItems} = useSelector(state => state.cart);

  const [loggedInUser] = useContext(UserContext);

  const [cart, setCart] = useState(false);

  let price= 0;
  let qty =0;
  const [products, setProducts] = useState();
  const [selectedProducts, setSelectedProducts] = useState();

  if (typeof window !== 'undefined') {
    setProducts (cartItems);
    setCart(true);
    setSelectedProducts (cartItems.filter ((x) =>  x.product.qty.selected === true));
  }

  const router = useRouter();

  useEffect(() => {

    if ( cartItems && cartItems.length <= 0) {
        router.push ('/')
    }

    else {
      ""
    }

  }, [])

  // Selected products price counter____________________________________________________________________________________________

    if (selectedProducts) {
        qty = selectedProducts.length;

              if (selectedProducts.length >= 0) {
                         price = selectedProducts.reduce ((previousValue, currentValue, array) => previousValue + currentValue.product.qty.qty * currentValue.product.qty.price, 0);
                }
    }
 // Selected products price counter____________________________________________________________________________________________

 const confirmOrder = () => {

      router.push ('/confirm');
      
  }

return (
            <section>
              <div>
                   <NavBar/>
                   {
                cartItems && cartItems.length >= 0 && cart ?   
                
                <div   className="shopping-cart-component">
                               <div style={{marginBottom: "70px"}}>

               
                                {
                                products.map (pd =>
               
                                <SelectedProduct products={products} key={pd.product._key} pd={pd}> </SelectedProduct>
                                
                                  )
                                 }
                           
                             </div> 

                               <div  className="order-summary">

                                      <div>
                                      <h2>Order Summary</h2>
                                      <p className="subtotal bold-text">Subtotal <span>৳ {price}</span></p>
                                      <p className="border-bottom bold-text">Shipping <span>৳ {qty * 60}</span></p>
                                      </div>
                                      <div className="cart-button">
                                      <button onClick={() => confirmOrder()} className="buy-now-btn w-100 bold-text buy-btn">Buy ({qty})</button>
                                     </div>                
                             </div> 

                   </div> : 
               ""
                      }
                      {/* <HomePage products={cartItems}/> */}
                  </div>

             {/* <ProductDetailsHeader isCartValid="none"/> */}
              
            </section>
  );
};

export default ShoppingCart;