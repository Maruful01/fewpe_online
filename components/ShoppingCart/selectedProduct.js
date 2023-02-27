import React, { useState, useContext } from 'react';
import Image from 'next/image';
import DeleteIcn from '../../icons/trash-alt-regular.svg';
import Xmark from '../../icons/xmark-solid.svg';
import circleCheck from '../../icons/circle-check-solid.svg';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';
import { addToCart } from '../../redux/actions/cartAction';

    const SelectedProduct = ({pd}) => {

      const dispacth = useDispatch ();

      const [qty, setQty] = useState();

      let currentQty;

// Current qty Counter based on selected color & size _______________|

      currentQty = pd.product.qty.colorAndSize.reduce ((previousValue, currentValue, array) => previousValue + currentValue.qty, 0);
   
// Current qty Counter based on selected color & size _______________|

      
let price;

// Count product price based on quantity _______________|||||
if (currentQty <= pd.product.productPrice.lowQunTo) {
  price = pd.product.productPrice.lowQunPrice;
}
if (currentQty >= pd.product.productPrice.highQunFrom) {
  price = pd.product.productPrice.highQunPrice;
}
// Count product price based on quantity _______________|||||

// Image loader
  const myLoader = ({ src, width, quality }) => {
                      return `https://i.ibb.co/${src}`
                     }
  const removeCart = (id) => {
    dispacth(removeFromCart(id));
}

const addToQtyHandler = (id, color, size, colorAndSize, selected) => {
  
  if (qty === 0) {
    qty = 1
  }

  dispacth(addToCart(id, {qty: currentQty, color: color, _id: id, size: size, price: price, colorAndSize: colorAndSize, selected: selected}));
}

const selectForOrder = (selected) => {

  addToQtyHandler(pd.product._id, pd.product.qty.color, pd.product.qty.size, pd.product.qty.colorAndSize, selected);

}

  const removeFromColorAndSize = (id) => {
  
    var index =  pd.product.qty.colorAndSize.map(x => {
      return x.id;
    }).indexOf(id);
    
   pd.product.qty.colorAndSize.splice(index, 1);
    addToQtyHandler(pd.product._id,  pd.product.qty.color, pd.product.qty.size, pd.product.qty.colorAndSize, false);


    if (!pd.product.qty.colorAndSize.length) {
      removeCart(pd.product._id)
    }
  
  }

  const currentQtyHandler = async (color, size, cQty, id, operator, selected) => {

  let pdQty;
    if (operator == "decrease") {
      pdQty = Number(cQty) - 1;
    }

    if (operator == "increase") {
      pdQty = Number(cQty) + 1;
    }
    if (pdQty < 1) {
      pdQty = 1
    }

    const op = pd.product.qty.colorAndSize.find ((x) =>  x.id === id);
    Object.seal ();

    op.qty = pdQty;

    addToQtyHandler(pd.product._id, color, size, pd.product.qty.colorAndSize, selected);
  }


    return (
        <section style={pd.product.qty.selected === false ? { opacity: "80%"} : { opacity: "100%"}} className="cart-products">

          <div className="selection-component">
          {
            pd.product.qty.selected === false ? <button className="check-box-btn" onClick={() => selectForOrder (true)}></button> : 
            
            <span onClick={() => selectForOrder (false)} className="remove-img">
            <Image
             src={circleCheck}
             alt={pd.product.product}
             objectFit="contain"
             width={20}
             height={20}
             />
            </span>
          }
          </div>
          
        <div className="product-info">
              <div className="d-flex flex-a-center left">
    
                <Image
                  src={pd.product.img}
                  alt={pd.product.product}
                  objectFit="contain"
                  width={150}
                  height={150}
                  loader={myLoader}
                  /> 
            </div>

            <div>
                  <div className="d-flex flex-a-center title-price-cmp">
                  <div>
                  <h6 type="radio" >  {pd.product.product.slice(0, 42)}...</h6>
                  <p type="radio" >{currentQty} × ৳{price} </p>
                  <span className="remove-img">
                 {/* <Image
                  onClick={() => removeCart(pd.product._id)}
                  src={DeleteIcn}
                  alt={pd.product.product}
                  objectFit="contain"
                  width={20}
                  height={20}
                  /> */}
                 </span>

                  </div>
            </div>
                 </div>
       </div>  
                 


                  <div className="selected-color-size">
                     {
                       pd.product.qty.colorAndSize.map (info => 

                       <div className="product-color-and-size" key={info.color+info.size}>
                                                
                        <div>
                          {
                            pd.product.qty.colorAndSize.length == 1 && pd.product.qty.colorAndSize[0].size == null ? "" : 
                            <div className="d-flex bg-box">
                            <p className="bold-text">Color: {info.color}</p>
                              {
                                info.size  == "no size" ? "" : <p className="bold-text" style={{marginLeft: "29px"}}>Size: {info.size}</p> 
                              }
                          </div>
                          }
                        </div>

                      <div className="d-flex max-w-400">

                      {
                            pd.product.qty.colorAndSize.length == 1 && pd.product.qty.colorAndSize[0].size == null ?
                            
                            <div className="product-color" > 
                            <button onClick={() =>  currentQtyHandler(info.color, info.size, info.qty, info.id, "decrease", false)}>-</button>
                            <input className="cart-input" type="number" name="" onChange={(e) => addToQtyHandler(pd.product._id, e.target.value , pd.product.qty.color, pd.product.qty.size, pd.product.qty.price)} value={info.qty} placeholder={info.qty} />
                            <button onClick={() =>  currentQtyHandler(info.color, info.size, info.qty, info.id, "increase", false)}>+</button>
                            </div>
                            
                            : 
                            <div className="product-color" > 
                            <button onClick={() =>  currentQtyHandler(info.color, info.size, info.qty, info.color+info.size, "decrease", false)}>-</button>
                            <input className="cart-input" type="number" name="" onChange={(e) => addToQtyHandler(pd.product._id, e.target.value , pd.product.qty.color, pd.product.qty.size, pd.product.qty.price)} value={info.qty} placeholder={info.qty} />
                            <button onClick={() =>  currentQtyHandler(info.color, info.size, info.qty, info.color+info.size, "increase", false)}>+</button>
                            </div>
                          }
                      
                        <span className="remove-img  flex-right">
                                <Image
                                  onClick={() => removeFromColorAndSize(info.id)}
                                  src={Xmark}
                                  alt={pd.product.product}
                                  objectFit="contain"
                                  width={20}
                                  height={20}
                                  />
                         </span>
                      </div>
                        
                           </div>)
                     }
                   </div> 

                   <div className="product-total-price bold-text">
                   <span className="sm-text">{currentQty} Pice</span> ৳ {currentQty * price} 
                   </div>

        </section>
    );
};
export default SelectedProduct;