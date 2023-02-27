import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Spin, Alert } from 'antd';
import { Result, Button } from 'antd';

const Error = () => {

   const router = useRouter();

    useEffect(() => {
          setTimeout(() => {
               router.push ('/')
          }, 50)
    }, [router])

    return (
        <Layout pageTitle="LOGY ZONE | Not Found">
             <div className="loading">
             <Spin tip="Loading...">
    <Alert
      message="please wait a while"
      description="Data rendering from server. It will take very little amount of time"
      type="info"
      size="large"
    />
  </Spin>,
             </div>

    <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary">Back Home</Button>}
  />,

    </Layout>
    );
};

export default Error;