import * as actionTypes from '../constants/cartConstants';
import { products } from '../../data/products';

export const addToCart = ( _id, qty, img, price, ctg, color, ) =>  async (dispatch, getState) => {

    // const { data } = await axios.get(`https://stormy-fjord-61489.herokuapp.com/products/${_id}`);

    const data = products.find ((productById) => productById._id == _id);

    
    dispatch ({
        type: actionTypes.ADD_TO_CART,
        payload: { 
            product: {
                  qty, 
                  product: data.title,
                  img: data.url[0].url,
                  _id: data._id,
                  ctg: data.ctg,
                  productPrice: data.productPrice
            }
        }
    })
 localStorage.setItem ('cart', JSON.stringify (getState().cart.cartItems))
}

export const removeFromCart = (_id) => (dispacth, getState) => {
    dispacth ({
        type: actionTypes.REMOVE_FROM_CART,
        payload: _id
    })
localStorage.setItem ('cart', JSON.stringify(getState().cart.cartItems))
}
