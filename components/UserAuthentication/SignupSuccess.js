import React, { useContext } from 'react';
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { UserContext } from '../GlobalProvider';

const SignupSuccess = ({message}) => {

    const [loggedInUser] = useContext(UserContext);
    return (
        <div style={{textAlign: "center", marginTop: "10vh"}}>
    <Result
    icon={<SmileOutlined />}
    title={`Welcome ${loggedInUser.name}, ${message}`}
  />

               <Link href="/"><a> 
               <button   className="btn send-otp-btn bold-text m-width">View More</button>  
               </a></Link>


        </div>
    );
};

export default SignupSuccess;