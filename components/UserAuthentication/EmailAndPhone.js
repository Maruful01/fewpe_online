import React, {useEffect, useState} from 'react';
import { FacebookOutlined } from '@ant-design/icons';
import Image from 'next/image';
import GoogleIco from '../../icons/google.svg';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect, FacebookAuthProvider } from "firebase/auth";
import { useRouter } from 'next/router';


const EmailAndPhone = () => {

    const router = useRouter();
    
    // Google login _______________________________________________________________
   const provider = new GoogleAuthProvider();
   const auth = getAuth();

  const googleLogin = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      if (typeof window !== 'undefined') {

        localStorage.setItem('user',  JSON.stringify({name: user.displayName, phone: user.email, id: user.uid, url: user.photoURL}));

        router.push ('/');
    }
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}
    // Google login _______________________________________________________________


    // facebook login _______________________________________________________________
    const fbProvider = new FacebookAuthProvider();


    const fbLoginHandler = () => {
        signInWithPopup(auth,fbProvider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user;

        //   if (typeof window !== 'undefined') {

        //     localStorage.setItem('user',  JSON.stringify({name: user.displayName, phone: user.email, id: user.uid, url: user.photoURL}));
    
        //     router.push ('/');
        // }
      
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
      
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = FacebookAuthProvider.credentialFromError(error);
      
          // ...
        });
    }

    return (
                   <div className="using-social-media">
                       <p>Sign in with:</p>
                              <button onClick={() => googleLogin()} className="btn google-btn">
                                  <span>
                                  <Image src={GoogleIco} height="30" width="30"  alt="" />
                                  
                                  {/* <GoogleOutlined /> */}
                                  </span>
                              </button>

                              <button onClick={() => fbLoginHandler ()} className="btn fb-btn">
                                  <span>
                                  <FacebookOutlined />
                                  </span>                                      
                              </button>
                       </div>
    );
};

export default EmailAndPhone;