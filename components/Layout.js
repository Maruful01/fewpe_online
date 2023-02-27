import React from 'react';
import Head from 'next/head';

const Layout = (props) => {

    return (
            <div className="page-wrapper">
                <Head>
                <title>{props.pageTitle}</title>
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="description" content={props.pageDescription}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="logyzone, logyzone.com, Logy Zone, logy zone" />
                <meta name="author" content="Khan Maruful Islam" />
                <meta property="og:type" content="website"/>    
                <meta property="og:title" content="Logyzone" key="title" />                    
                <meta property="og:description" content="Wholesale products from best suppliers. Get support online and grow your business with us. Buy products at the lowest price from verified factories/suppliers. Grab your deal today." key="description" />
                <meta property="og:url" content="https://www.logyzone.com/" key="url" />
                <meta property="og:image" content="../components/logo.png" key="image" />  
                <link rel="icon" href="../public/favicon.ico" type="image/vnd.microsoft.icon" sizes="16x16"/>
                <link rel="icon" href="../public/favicon.ico" type="image/vnd.microsoft.icon" sizes="32x32"/>
                <link rel="icon" href="../public/favicon.ico" type="image/vnd.microsoft.icon" sizes="8x48px"/>
                <link rel="icon" href="../public/favicon.ico" type="image/vnd.microsoft.icon" sizes="96x96px"/>
                <link rel="icon" href="../public/favicon.ico" type="image/vnd.microsoft.icon" sizes="192x192"/>
                <link rel="icon" href="../public/favicon.ico" type="image/vnd.microsoft.icon" sizes="144x144"/>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossOrigin="anonymous"/>
                </Head>
                 {props.children}
             </div>

    );
}

export default Layout;