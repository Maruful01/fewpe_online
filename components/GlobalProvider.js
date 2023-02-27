import React, { useState } from 'react';
import Head from 'next/head'
import { Provider, useSelector } from 'react-redux';
import store from '../redux/store';
import { createContext } from 'react';

export const  UserContext = createContext ();

const GlobalProvider = ({children}) => {

     let loggedInUser;
        if (typeof window !== 'undefined') {
            const user =  localStorage.getItem("user");

            if (user == null) {
                loggedInUser = {phone: "", id: "", name: ""}  
            }

            else {
                loggedInUser = JSON.parse(user);
            }

        } 

        else {
            loggedInUser = {phone: "", id: "", name: ""}  
        }

    return (
        <Provider store={ store }>
            <UserContext.Provider  value={[loggedInUser]}>
                <Head>
                <title>Logy Zone</title>
                </Head>
                 {children}
            </UserContext.Provider>
        </Provider>
    );
};

export default GlobalProvider;