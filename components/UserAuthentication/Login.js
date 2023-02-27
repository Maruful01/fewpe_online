import React, {useEffect, useState} from 'react';
import { GoogleOutlined, FacebookOutlined, Tag, Button, LoadingOutlined, WarningOutlined , CheckOutlined  } from '@ant-design/icons';
import { auth } from '../../firebase/firebaseConfig';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Image from 'next/image';
import GoogleIco from '../../icons/google.svg';
import { useContext } from 'react';
import { UserContext } from '../GlobalProvider';
import { useRouter } from 'next/router';
import EmailAndPhone from './EmailAndPhone';


const Login = () => {

    const [loggedInUser] = useContext(UserContext);
    const [allUser, setAllUser] = useState("");
    const [thisUser, setThisUser] = useState(null);
    const [thisUserPassword, setThisUserPassword] = useState(false);
    const router = useRouter();


    useEffect(() => {
        fetch('https://stormy-fjord-61489.herokuapp.com/users')
            .then(res => res.json())
            .then (data =>  setAllUser(data))
    
      }, []);

     const phoneChecker = (e) => {
          
        const countryCode = "+88";
    
        if (allUser.length > 0) {
            const existingPhone = allUser.find ((user) => user.phone == countryCode+e.target.value);
            
            if (e.target.value.length === 11) {
                setThisUser (existingPhone);
    
            }
        }                  
     }

     const passwordChecker = (e) => {
        let inputPassword = e.target.value;
           if (thisUser && thisUser.password == inputPassword) {   
            setThisUserPassword (true);
           } 

           else {
            setThisUserPassword (false);
           }
     }


     const loginHandler = () => {


        if (thisUser && thisUserPassword == true) {

         if (typeof window !== 'undefined') {
             localStorage.setItem('user',  JSON.stringify({name: thisUser.name, phone: thisUser.phone, id: thisUser._id}));

             router.push ('/');
         }
        }

        else {
            alert("phone and password is not valid")
        }

        window.location.reload(false);



     }


 

    return (

                <div  className="sign-in-component">
                          <div className="using-phone">
                          <p>Phone Number:</p>
                          <input onChange={phoneChecker} type="number" placeholder="+88" name="" id="" />
                          <p>Password:</p>
                          <input onChange={passwordChecker} type="password" name="" id="" placeholder="********" />
                          <button onClick={() => loginHandler()} className="btn send-otp-btn bold-text"> Login </button>
                       </div>

                      <EmailAndPhone/>
                       
               </div>  
    );
};

export default Login;