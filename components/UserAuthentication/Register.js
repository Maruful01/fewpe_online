import React, {useContext, useState} from 'react';
import { GoogleOutlined, FacebookOutlined, Tag, Button, LoadingOutlined, WarningOutlined , CheckOutlined  } from '@ant-design/icons';
import { auth } from '../../firebase/firebaseConfig';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Image from 'next/image';
import GoogleIco from '../../icons/google.svg';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../GlobalProvider';
import EmailAndPhone from './EmailAndPhone';

const Register = () => {

    const [otp, setOtp] = useState(false);
    const [signUp, seSinUp] = useState(false);
    const [phoneNumber, sePhoneNumber] = useState("");
    const [verifiedPhoneNumber, setVerifiedPhoneNumber] = useState(null);
    const [verifiedPassword, setVerifiedPassword] = useState(null);
    const [userName, setUserName] = useState(null);
    const [allUser, setAllUser] = useState("");
    let isPhoneUsed = false;
    const [isPhoneNoValid, setIsPhoneNoValid] = useState("userName");
    const router = useRouter();
    const [loggedInUser] = useContext(UserContext);
        

   if (isPhoneNoValid.length == 11) {
    setIsPhoneNoValid ("valid");
   }
    // firebaseAuth

    const getRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-verifier', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
            }
          }, auth);
    }


    useEffect(() => {
        fetch('https://stormy-fjord-61489.herokuapp.com/users')
            .then(res => res.json())
            .then (data =>  setAllUser(data))

      }, []);



      if (allUser.length > 0) {

        const existingPhone = allUser.find ((user) => user.phone == phoneNumber);
        if (existingPhone) {
            isPhoneUsed = true;
        }

    }

     

    const getPhoneNumber = (e) => {


        setIsPhoneNoValid (e.target.value)
        const countryCode = "+88";

        if (e.target.value.length === 11) {
            sePhoneNumber (countryCode + e.target.value);

        }
    }

// Request for OTP________--________________________|||
    const requestOTP = () => {

        // if (phoneNumber.length >= 14) {
            
        //     console.log (phoneNumber);

        // }

        if (phoneNumber.length >= 14 && isPhoneUsed === false) {

            getRecaptcha ()
            let appVerifier = window.recaptchaVerifier;
            signInWithPhoneNumber (auth, phoneNumber , appVerifier)
            .then((confirmationResult) => {
               // SMS sent. Prompt user to type the code from the message, then sign the
               // user in with confirmationResult.confirm(code).
               window.confirmationResult = confirmationResult;
               // ...
             }).catch((error) => {
               // Error; SMS not sent
               // ...
               console.log(error);
             });
        }

        sePhoneNumber ("");
        setOtp(true);
    }
// Request for OTP________--________________________|||


// Verify requested OTP________--________________________|||
    const handleVerifyOTP = (e) => {

        let otp = e.target.value;

        if (otp.length === 6) {

            let confirmationResult = window.confirmationResult;

            confirmationResult.confirm(otp).then((result) => {
                // User signed in successfully.
                const user = result.user;
                setVerifiedPhoneNumber (user.phoneNumber);
                console.log (user.phoneNumber, user.phoneNumber.length);
                // ...
              }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
              });
                     setOtp(false);
        }       
    }


    const passwordGenerator = (e) => 
    { 
    const  password =   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(e.target.value.match(password)) 
    { 
    setVerifiedPassword (e.target.value);
    return true;
    }
    else
    { 
        setVerifiedPassword (null);
    return false;
    }
    }

    const registerNewUser = () => {

        if (verifiedPhoneNumber && verifiedPhoneNumber.length == 14 && verifiedPassword && userName) {
            fetch('https://stormy-fjord-61489.herokuapp.com/users', {
                method: 'POST',
                body: JSON.stringify({name: userName, phone: verifiedPhoneNumber, password: verifiedPassword}),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(res => res.json())
            .then (data => {  
            const newUser = {name: data.name, phone: data.phone, id: data._id};
            if (typeof window !== 'undefined') {
                localStorage.setItem('user',  JSON.stringify(newUser));
            }  
            })
        }
   
            router.push ('/success');
    
        }

    return (
              <div>

<div  className="sign-in-component">

<div className="using-phone">   

   <form name="register-form">

       
       
    <p>Name:</p>
    <input onChange={(e) => setUserName(e.target.value)} className="border-1" type="text" name="" id="" required />
    
    <p>Phone Number: {isPhoneNoValid == "valid" ? <span className="checked"><CheckOutlined /></span> : ""} </p>
    {isPhoneUsed ? <h6 className="password-msg"> <span className="warning-ico"> <WarningOutlined /></span> This phone number already have an account. </h6> : ""}
    <input onChange={getPhoneNumber} className="border-1" type="number" placeholder="+88" name="" id="" required />
    <br />
    {!isPhoneUsed ? <button className="btn send-otp-btn bold-text m-width" onClick={() => requestOTP()} >{otp ? <span>Sending <LoadingOutlined /></span>  : "Send OTP"} </button> 
    
    : <button className="btn register-btn bold-text" type="submit"> Forget password </button>}
    

    <p>OTP: {verifiedPhoneNumber && verifiedPhoneNumber.length == 14 ? <span className="checked"><CheckOutlined /></span> : ""} </p>
    <input className="border-1" type="number" name="" onChange={handleVerifyOTP} id="" required />
    {/* <button className="btn verify-otp-btn bold-text m-width"> Verify </button> */}

    
     <span>
         {
             verifiedPhoneNumber && verifiedPhoneNumber.length == 14 ?    
             <> 
           <p>Password*</p>
             {
           !verifiedPassword ? <>
               <h6 className="password-msg"> <span className="warning-ico"> <WarningOutlined /></span> Length must be 6 - 20 characters</h6>
               <h6 className="password-msg"> <span className="warning-ico"> <WarningOutlined /></span> Must have at last one digit (0 - 9)</h6>
               <h6 className="password-msg"> <span className="warning-ico"> <WarningOutlined /></span> Must have at last one uppercase (A -Z)</h6>
                                                     
                 </> : <span className="checked"><CheckOutlined /></span> 
                 
             }
             <br />
                
                <input onChange={passwordGenerator} className="border-1" type="password" name="" id="" placeholder="********" required />
                <br />

             </>
             : ""
         }
     </span>

    </form>
    {
   verifiedPhoneNumber && verifiedPhoneNumber.length == 14 ? 
    
   <button onClick={() => registerNewUser ()} className="btn register-btn bold-text" type="submit"> Register </button>

    : "" 

    }
    </div>
         <EmailAndPhone/>
        </div> 

        <div id="recaptcha-verifier"></div>
              </div>
    );
};

export default Register;