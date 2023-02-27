import React, { useReducer, useState } from 'react';
import Layout from '../../components/Layout';
import { Image, Tag} from 'antd';
import { useDispatch,  useSelector } from 'react-redux';
import { StarOutlined, CloseOutlined, ShopOutlined } from '@ant-design/icons';
import { addToCart } from '../../redux/actions/cartAction';
import { Button } from 'antd';
import Description from '../../components/ProductDetails/Description';
import Options from '../../components/HomePage/Options/Options';
import NavBar from '../../components/HomePage/Header/NavBar';
import CategoryNav from '../../components/HomePage/Header/Category/CategoryNav';

const Product = ({product, setOrder, setColorAndQty}) => {

    const [ color, setColor] = useState(null);
    const [ size, setSize] = useState(product.size ? null : "no size");
    const [ qty, setQty] = useState(1);
    const [isAddToCart, setIsAddToCart] = useState(false);
  
    const initialState = [{color: null, size: null, qty: qty, id: product._id}];
  
    // ______________________________________________________________________________________________
  
    const [arr, dispatch] = useReducer((state = [], action) => {
  
      const existItem = state.find ((x) =>  x.id == action.id);
  
      switch (action.type) {
  
        case "ADD":
  
        if (existItem) {
          return [
            ...state,
          ];
        }
        else {
          return [
            ...state,
            {
              color: action.color,
              size: action.size,
              qty: action.qty,
              id: action.id,
            },
          ];
        }
        case "REMOVE":
  
          return state.filter(({ id }) => id !== action.id);
  
          case "QTY": 
          return  state;
     
      }
  
      
    }, []);
  
    const onAddTodo = (color, size, qty,  id) => {
  
      dispatch({
        type: "ADD",
        color: color,
        size: size,
        qty: qty,
        id: id,
      });
  
    };
    
    /__________________________________________________________________________________________________________________________/ 
    const productColorAndSIze = arr.length ? arr : initialState;
  
  
    const existItem = arr.find ((x) =>  x.color == color && x.size == size);
  
    const currentQtyHandler = async (thisColor, thisSize, thisId, pdQty) => {
  
        if (pdQty < 2) {
          pdQty = 1
        }
    
        const op = arr.find ((x) =>  x.id === thisId);
        Object.seal ();
        op.qty = pdQty;
        let newArr = arr;
        dispatch({type: "QTY", newArr});
  
  
        dispatch({
          type: "ADD",
          color: thisColor,
          size: thisSize,
          qty: pdQty,
          id: thisId,
        });
      }
  
  
  
      if (color && size) {
  
        onAddTodo(color, size, qty, color+size);
  
        setColor();
        setIsAddToCart(false);
        
        if (size === "no size") {
  
        }
        
        else {
          setSize();
        }
      }
  
      else {
  
      }
    const dispacth = useDispatch ();
    const {cartItems} = useSelector(state => state.cart);
  
    const addToQtyHandler = (id, qty, color, size, price, colorAndSize) => {
      setColor ();
      dispacth(addToCart(id, {qty: qty, color: color, _id: id, size: size, price: price, colorAndSize: colorAndSize, selected: false}));
    }

    setColorAndQty(arr);

    return (
<Layout pageTitle={product.title}>
        <NavBar cartItems={cartItems}/>
        <div className="des-component">
 <div  className="product-details">
 <div style={{marginBottom: "20px"}}>
          <Image
             className="single-image"
             alt="product-image"
             src={`https://i.ibb.co/${product.url[0].url}`}
          />
          <br />
  <Image.PreviewGroup>
                <div className="multiple-images-component">
                {
                    product.url[1] ?     
                         <Image
                         className="multiple-images"
                            alt="url"
                            src={`https://i.ibb.co/${product.url[1].url}`}
                           />   
                           : 
                           ""
                 }

               {
                    product.url[2] ?     
                         <Image
                         className="multiple-images"
                            alt="url"
                            src={`https://i.ibb.co/${product.url[2].url}`}
                           />   
                           : 
                           ""
                   }

                   {
                    product.url[3] ?     
                         <Image
                            className="multiple-images"
                            alt="url"
                            src={`https://i.ibb.co/${product.url[3].url}`}
                           />   
                           : 
                           ""
                  }

                   {
                    product.url[4] ?     
                         <Image
                            alt="url"
                            className="multiple-images"
                            src={`https://i.ibb.co/${product.url[4].url}`}
                           />   
                           : 
                           ""
                  }

                  {
                    product.url[5] ?     
                         <Image
                            alt="url"
                            className="multiple-images"
                            src={`https://i.ibb.co/${product.url[5].url}`}
                           />   
                           : 
                           ""
                 }

                 {
                    product.url[6] ?     
                         <Image
                            alt="url"
                            className="multiple-images"
                            src={`https://lzimg.xyz/${product.url[6].url}`}
                           />   
                           : 
                           ""
                 }
                </div>
  </Image.PreviewGroup>


  </div>


 <div className="details-component">
       <h5>{product.title}</h5>
                    {
                  product.star > 0  ?    <div className="ratings">
                                            <StarOutlined />
                                          <p>{product.star}</p> 
                                          <span className="ml-2"><Tag color="magenta">{product.seller.shopName}</Tag></span>  
                                           </div>:
                                           
                                           ""
                                                  } 
       <br />

       <div className="supplier-component">
       <button>Visit Shop</button> <button>Contact Supplier</button>
       </div>


       <div className="price-component">
         <h2 className="price">
          <span>{product.productPrice.lowQunFrom} - {product.productPrice.lowQunTo} pieces</span>
          <br />
          BDT {product.productPrice.lowQunPrice}
          </h2>

          <h2 className="price">
          <span>{product.productPrice.highQunFrom} - {product.productPrice.highQunTo} pieces</span>
          <br />
          BDT {product.productPrice.highQunPrice}
          </h2>
       </div>

       <div className="shipping">
         <h5>Shipping: BDT   50</h5>
         <p>Estimated Delivery: {product.deliveryDay} </p>
       </div>
                   <div className="color-and-size-comp">
                     {
                       arr.map (info => 
                       
                       <div className="color-and-size d-flex" key={info.color+info.size}>
                                            <div className="product-color"> 
                                            <div  className="color" style={{backgroundColor: info.color, height: "35px", width: "40px", marginRight: "40px"}}></div>
                                            </div>
                                            <p>{info.color}</p>
                                 <p style={{marginLeft: "20px", marginRight: "20px"}}><span className="bold-text"> {info.size == "no size" ? "" : info.size}</span></p>
                                 <div className="product-color" > 
                            <button className=""  onClick={() => currentQtyHandler(info.color, info.size, info.id, info.qty - 1)}>-</button>
                            <input className="" type="number" name="" value={info.qty} placeholder={info.qty}/>
                            <button className="" onClick={() => currentQtyHandler(info.color, info.size, info.id, info.qty + 1)}>+</button>
                             </div>
                          <span className="delete-f-arr" onClick={() => dispatch({ type: "REMOVE", id: info.color+info.size })}>
                          <CloseOutlined />
                         </span>
                      </div>)
                     }
                   </div>      
                         
                            <div>


                            <div className="color-component">
                            <p className="bold-text">Color: {color}</p>
                            <div className="color-family">
                           {
                             product.color.map (col => 

                              <div  key={col.id} >
                                         {
                                           col.color ? 

                                            <div className="product-color"> 
                                            <div className="color" onClick={() => setColor(col.color)}  style={{backgroundColor: col.color}}></div>
                                            </div>
                                               : 

                                    ""
                                         }
                              </div>
                              

                              )
                           } 
                          </div>
                            </div> 
                        </div>

                                           {
                                             product.size ? 
                                             
                                             <div className="size-component">
                                               <p className="bold-text">Size:  {size}</p>
                                               {
                                                 product.size.map (siz => <button key={siz.id} onClick={() => setSize (siz.size)}>{siz.size}</button>)
                                               }
                                             </div>
                                             
                                             : ""
                                           }                          {
                                            isAddToCart ? <p style={{color: "red", position: "relative", top: "-40px"}}>Please select product color first</p> : ""
                                          }
                
                                          <div className="cart-button">
                                        {
                                         arr.length ?  <button className="buy-now-btn" onClick={() => setOrder(true)}>Buy now</button>
                                        : 
                                        <span>
                                            <button className="buy-now-btn" onClick={() => setIsAddToCart(true)}>Buy now</button>
                                        </span>
                                        }
                                       
                                        {
                                         arr.length ? <button className="add-cart-btn" onClick={() => addToQtyHandler(product._id, qty, color, size, product.price, productColorAndSIze)}>Add to Cart</button>
                                        : 
                                        <span>
                                        <button className="add-cart-btn" onClick={() => setIsAddToCart(true)}>Add to Cart</button>
                                        </span>
                                        }
                                       
                            </div>
      </div>
      {/*  */}


 </div>

 <Description product={product} arr={arr}/>


        
        </div>
        <Options/>

      </Layout>
    );
};

export default Product;