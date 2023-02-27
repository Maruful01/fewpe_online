import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import NavBar from '../HomePage/Header/NavBar';
import circleCheck from '../../icons/circle-check-solid.svg'
import { useRouter } from 'next/router';
import { UserContext } from '../GlobalProvider';

const OrderNow = ({product, colorAndQty}) => {

    const [loggedInUser] = useContext(UserContext);

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [mobile, setMobile] = useState(null);

    // const selectedProduct = [colorAndQty]

    // address

    const [region, setRegion] = useState(null);
    const [district, setDistrict] = useState(null);
    const [address, setAddress] = useState(null);


    
    const router = useRouter();

    useEffect(() => {

        if (loggedInUser.phone.length < 10) {

            router.push ('/authentication')
          }

          else {
              ""
          }
    
      }, [])


      const confirmOrder = (e) => {
        if (firstName && lastName && mobile && region && district && address) {
            fetch('https://stormy-fjord-61489.herokuapp.com/orders', {
                method: 'POST',
                body: JSON.stringify({selected: [colorAndQty, product], phone: mobile, address: `Region: ${region}, District: ${district}, Detailed Address: address `, authentication: loggedInUser}),
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
        <div>
            <NavBar/>
            <br />
            <br />
                 <div className="sign-in-component">
                     <div className="using-phone">
                     <form action="" method="post" >
                         <h4>Customer Information</h4>
                         <p>Name</p>
                         <input type="text" name="" id="" onChange={(e) => setFirstName(e.target.value)} placeholder="First Name *" required />
                         <p></p>
                         <input type="text" name="" id="" onChange={(e) => setLastName(e.target.value)} placeholder="Last Name *" required />

                         <p>Mobile</p>
                         <input type="number" name="" id="" onChange={(e) => setMobile(e.target.value)} placeholder="Mobile No *" required />

                         <p>Address *</p>
                         <input type="text" name="" id="" onChange={(e) => setRegion(e.target.value)} placeholder="Region *" required />
                         <p></p>
                         <input type="text" name="" id="" onChange={(e) => setDistrict(e.target.value)} placeholder="District *" required />
                         <p></p>
                         <input type="text" name="" id="" onChange={(e) => setAddress(e.target.value)} placeholder="Thana, Post, Road, House no" required />
                         <br />
                         <button className="btn send-otp-btn bold-text m-width" onClick={() => confirmOrder()} >Confirm Order</button> 

                     </form>
                     </div>

                     <div className="using-social-media">
                        <h4>Payment Method</h4>
                        <p>Only Cash on Delivery is available. You have to pay 20% of your total bill to confirm this order. We will contact with you soon.</p>
                        <p>Thank You!</p>
                       </div>

                 </div>
        </div>
    );
};

export default OrderNow;