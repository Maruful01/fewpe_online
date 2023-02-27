import React from 'react';
import ConfirmOrder from '../components/ConfirmOrder/ConfirmOrder';
import NavBar from '../components/HomePage/Header/NavBar';
import Layout from '../components/Layout';

const confirm = () => {
    return (
        <Layout pageTitle="Confirm Order">
            <NavBar/>
          <ConfirmOrder/>
       </Layout>
    );
};

export default confirm;