import React from 'react';
import {useEffect} from 'react';
import { useRouter } from 'next/router'
import Layout from '../components/Layout';
import Link from 'next/link';
import { Result, Button } from 'antd';


const NotFound = () => {

     const router = useRouter();

     useEffect(() => {
           setTimeout(() => {
                router.push ('/')
           }, 3000)
     }, [router])

    return (
           <Layout pageTitle="LOGY ZONE | Not Found">
                                <Result
                   status="404"
                   title="404"
                   subTitle="Sorry, the page you visited does not exist."
                   extra={<Button type="primary">Back Home</Button>}
                 />,
            </Layout>
    );
};
export default NotFound;