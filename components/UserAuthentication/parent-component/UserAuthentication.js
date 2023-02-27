import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../GlobalProvider';
import Login from '../Login';
import Register from '../Register';
import { useRouter } from 'next/router';

const UserAuthentication = () => {
    const [loggedInUser] = useContext(UserContext);

    const [signUp, seSinUp] = useState(false);

    const router = useRouter();

    
    useEffect(() => {
        if (loggedInUser.phone.length > 10) {

            router.push ('/profile')
           }

          else {
              ""
          }
    
      }, [])


    return (


           <div>
            {signUp ? <h6 className="welcoming-text" onClick={() => seSinUp (false)}>Go back to <span>login page</span> </h6> 
            
            : 

           <h6 className="welcoming-text" onClick={() => seSinUp (true)}> I am new in Logyzone!  <span>Sign Up now</span></h6>
            }

             { 
                signUp ? 
                       
                 <Register/>
            
                  : 
              
                  <Login/>
              }
            </div>
    );
};

export default UserAuthentication;