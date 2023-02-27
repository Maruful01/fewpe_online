import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { UserContext } from '../GlobalProvider';
import { useRouter } from 'next/router';

const ConfirmOrder = () => {
    const {cartItems} = useSelector(state => state.cart);

    const [loggedInUser] = useContext(UserContext);
    const [selected, setSelected] = useState(false);
    const [price, setPrice] = useState();
    const [qty, setQty] = useState();
    let products;
    let selectedProducts;
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [region, setRegion] = useState(null);
    const [district, setDistrict] = useState(null);
    const [area, setArea] = useState(null);
    const [address, setAddress] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null);

    const router = useRouter();

    
    useEffect(() => {

        if (loggedInUser.phone.length < 10) {

            router.push ('/authentication')
          }

          else {
              ""
          }
    
      }, [])

 if (typeof window !== 'undefined') {
    if (selectedProducts) {
      
              if (selectedProducts.length >= 0) {
                         const subtotal = selectedProducts.reduce ((previousValue, currentValue, array) => previousValue + currentValue.product.qty.qty * currentValue.product.qty.price, 0);
                         const totalQty = selectedProducts.reduce ((previousValue, currentValue, array) => previousValue + currentValue.product.qty.qty, 0);
                         setQty(totalQty);
                         setPrice (subtotal);
                        }
    }
    }

  
    if (typeof window !== 'undefined') {
      products = cartItems;
      selectedProducts = products.filter ((x) =>  x.product.qty.selected === true);
  }  

  const myLoader = ({ src, width, quality }) => {
    return `https://i.ibb.co/${src}`
   }

   
   const confirmOrder = () => {
    if (name&& phone && area && region && district && address && paymentMethod) {
        fetch('https://stormy-fjord-61489.herokuapp.com/orders', {
            method: 'POST',
            body: JSON.stringify({selected: selectedProducts, phone: phone, address: `Region: ${region}, District: ${district}, area: ${area} Address: ${address}`, authentication: loggedInUser}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then (data => console.log("Order Confirmed", data))

        router.push ('/oudersuccess');
    }
    
    else {
        alert("Information is invalid!");
    }



    }

    return (
        <section className="confirm-order">
        <div  className="shipping-address">
        <form action="" method="post">
        <h5>Shipping address</h5>
        <label htmlFor="">Full Name</label>
         <br />
         <input type="text" name="" id="" onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" required />
         <br />
         <label htmlFor="">Phone Number</label>
         <br />
         <input type="number" name="" id="" onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" required  />
         <br />

         <br />
         <label htmlFor="">Region</label>
                 <br />
                 <select id="region" onChange={(e) => setRegion(e.target.value)} required>
                   <option value="Please select your region">Please select your region</option>
                   <option value="Dhaka">Dhaka</option>
                   <option value="Khulna">Khulna</option>
                   <option value="Rajshahi">Rajshahi</option>
                   <option value="Barisal">Barisal</option>
                   <option value="Rangpur">Rangpur</option>
                   <option value="Chittagong">Chittagong</option>
                   <option value="Mymensingh">Mymensingh</option>
                   <option value="Sylhet">Sylhet</option>
                </select>
                <br />
        <label htmlFor="">District</label>
         <br />
         <input type="text" required name="" id="" onChange={(e) => setDistrict(e.target.value)} placeholder="Enter your district" />

         <br />
        <label htmlFor="">Area</label>
         <br />
         <input type="text" required name="" id="" onChange={(e) => setArea(e.target.value)} placeholder="Enter your Area" />
        
         {/* <br />
         <button className="btn send-otp-btn bold-text m-width" onClick={() => confirmOrder()} >Save</button>  */}
        </form>


             <form action="" className="second-form" method="post">

                    <label htmlFor="">Address</label>
                     <br />
                    <input type="text" required name="" id="" onChange={(e) => setAddress(e.target.value)} placeholder=" House#, Street#, Block" />
                     <br />        

                <label htmlFor="">Please Select Payment Method</label>
                 <br />
                 <select id="payment" onChange={(e) => setPaymentMethod(e.target.value)} required>
                   <option value="Cash On Delivery">Cash On Delivery</option>
                   <option value="Credit/Debit Card">Credit/Debit Card</option>
                   <option value="bKash">bKash</option>
                   <option value="Rocket">Rocket</option>
                </select>
                <br />
            </form>
        </div>

        <div style={{background: "#F8F8FF", padding: "10px 10 10px 20"}}>
            {
                selectedProducts ?
                        <div className="selected-products">
                            {
                            selectedProducts.map (pd => <div className="order-products" key={pd.product._id}>
                                <span style={{width: "100px"}}>
                                            <Image
                                               src={pd.product.img}
                                               alt={pd.product.img}
                                               objectFit="contain"
                                               width={50}
                                               height={50}
                                               loader={myLoader}
                                               />
                                </span>
                                               <div>
                                               <h6>{pd.product.product.slice(0, 35)}...</h6>
                                              
                                                   <div className="d-flex">
                                                   {
                                                  pd.product.qty.colorAndSize.map (cs => <div className="d-flex color-size" key={cs.id}>

                                                       <p style={{backgroundColor: cs.color, height: "20px", width: "20px"}}></p>
                                                       <p>Qty: {cs.qty}</p>
                                                  </div>) 
                                                }
                                                  </div>
                                     

                                               </div>
                                                    

                                                  </div>)
                            }
                        </div>
                        :
                        ""
            }

            <div className="confirm-order-text">
            <h5 >Subtotal({qty} Items): <span> BDT {price}</span></h5>
            <h5>Shipping Fee: <span> BDT {qty * 60}</span></h5>
            <h5>Total: <span>BDT {qty * 60 + price}</span> </h5>
            <button className="btn send-otp-btn bold-text m-width" onClick={() => confirmOrder()} >Confirm Order</button> 
            </div>
            
        </div>

        </section>
    );
};

export default ConfirmOrder;