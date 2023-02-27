
import React from 'react';
import NavBar from '../components/HomePage/Header/NavBar';
import Layout from '../components/Layout';
import UserProfile from '../components/UserProfile/UserProfile';

const profile = () => {

    return (
        <Layout pageTitle="My profile">
            <NavBar/>
            <h3 className="profile-title">My profile</h3>
            <UserProfile/>
        </Layout>
    );
};

export default profile;