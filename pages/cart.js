import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';
import Options from '../components/HomePage/Options/Options';
import Layout from '../components/Layout';

const cart = () => {
    return (
         <Layout pageTitle="Logyzone.com - Shopping Cart">
          <ShoppingCart/>
        </Layout>
    );
};

export default cart;