import React from 'react';
import SignupSuccess from '../components/UserAuthentication/SignupSuccess'

const success = () => {
    return (
        <div>
            <SignupSuccess message={"You are successfully registered!"}/>
        </div>
    );
};

export default success;