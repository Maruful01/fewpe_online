import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button, Carousel,  } from 'react-bootstrap';
import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
  } from '@react-hook/window-size';

// export const getStaticProps = async (context) => {

//   const res = await fetch (`https://www.dhakdum.com/api`, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     },
// });

//   const sliders = await res.json();

//   return {

//     props: { sliders: sliders},
//     revalidate: 30,

//   }
// } 


const Slider = ({sliderImages}) => {

    const [width, height] = useWindowSize()
    const onlyWidth = useWindowWidth()
    const onlyHeight = useWindowHeight()




  const myLoader = ({ src, width, quality }) => {
    return `https://i.ibb.co/${src}`
  }
    return (
     <div className="Slider-component">

    <div className="slider-image">
    <Carousel controls={false} className="Slider">

    {
    sliderImages.map (sImg => 
      <Carousel.Item key={sImg._id}  interval={3000}>
     <span className="d-block w-100">

              <Image
         src={sImg.url}
         alt={sImg._id}
         loader={myLoader}
         width={2000}
         height={700}
       />

     </span>
        {/* <Carousel.Caption>
    
        </Carousel.Caption> */}
      </Carousel.Item>
     ) }
    </Carousel>
    </div> 
     </div>
    );
};

export default Slider;