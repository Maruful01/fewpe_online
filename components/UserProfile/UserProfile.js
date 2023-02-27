import React, { useContext, useEffect } from 'react';
import { UserContext } from '../GlobalProvider';
import { useRouter } from 'next/router';

const UserProfile = () => {
    
    const [loggedInUser] = useContext(UserContext);

    
    const router = useRouter();

    useEffect(() => {

        if (loggedInUser.phone.length < 10) {

            router.push ('/authentication')
          }

          else {
              ""
          }
    
      }, [])


      const logOutHandler = () => {
         if (typeof window !== 'undefined') {
             localStorage.setItem('user',  JSON.stringify({name: "", phone: "", id: ""}));

             router.push ('/');
         }

         else {}
     }


    return (
        <div className="profile-component">

            <div>
                <p>Full name</p>
                <h6>{loggedInUser.name}</h6>
                <button onClick={() => logOutHandler()} className="btn register-btn bold-text"> Logout </button>
            </div>

            <div>
                <p>Email/ Phone</p>
                <h6>{loggedInUser.phone}</h6>
            </div>

            <div>
                <p>Address</p>
            <button className="btn send-otp-btn bold-text"> + Add a new address </button>
            </div>

        </div>
    );
};

export default UserProfile;