import React, { useEffect } from 'react';
import Header from '../components/HomePage/Header/Header';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

const about = (props) => {
    
    const home = "Home";
    
    
    return (
        <Layout pageTitle="Lgyzone | About">
            <Header home={home}/>
        </Layout>
    );
};

export default about;