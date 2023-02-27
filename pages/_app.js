import GlobalProvider from '../components/GlobalProvider';
import '../styles/globals.css';
import '../styles/NavBar.css';
import '../styles/CategoryNav.css';
import '../styles/sideBar.css';
import '../styles/Options.css';
import '../styles/Slider.css';
import '../styles/skeleton.css';
import '../styles/home.css';
import 'antd/dist/antd.css';
import '../styles/productDetails.css';
import '../styles/productDetailHeader.css';
import '../styles/shoppingCart.css';
import '../styles/authentication.css';
import '../styles/profile.css';
import '../styles/Footer.css';
import '../styles/confirm.css';
import React from 'react';
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }) {

    return (
     <GlobalProvider>
       <Component {...pageProps} />
       <Footer/>
     </GlobalProvider>
    )
  }

export default (MyApp);
