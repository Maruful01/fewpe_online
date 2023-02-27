import React from 'react';
import Image from 'next/image';

const Description = ({product}) => {

    const myLoader = ({ src, width, quality }) => {
        return `https://i.ibb.co/${src}`
      }

    const {a, aValue, b, bValue, c, cValue, d, dValue, e, eValue, f, fValue } = product.shortDescription;
    return (
        <section>
        <div className="short-description">

            <div className="quick-details">
            <h4>Quick Details</h4>
            <p> <span>{a}</span>: {aValue}</p>
            <p> <span>{b}</span>: {bValue}</p>
            <p> <span>{c}</span>: {cValue}</p>
            <p> <span>{d}</span>: {dValue}</p>
            <p> <span>{e}</span>: {eValue}</p>
            <p> <span>{f}</span>: {fValue}</p>
            </div>

            <div className="quick-details">
            <h4>Seller Profile</h4>
            <p> <span> {product.seller.shopName}</span></p>
                                                             {/* <Image
                                                             src={product.longDescription.images[1].url}
                                                             alt="top pd"
                                                             objectFit="contain"
                                                             width={150}
                                                             height={150}
                                                             loader={myLoader}
                                                             />  */}

            <p> <span>Country / Region</span>: Bangladesh</p>
            <p> <span>Phone</span>: {product.seller.mobile}</p>
            <p> <span>Address</span>: {product.seller.address ? product.seller.address : "Dhaka Commerce College Road, Mirpur, Dhaka, Bangladesh"}</p>
            </div>

        </div>
          <h4>Description</h4>
          <h5>{product.title}</h5>
          <p>{product.longDescription.text}</p>
    </section>
    );
};

export default Description;