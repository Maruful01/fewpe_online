import * as  actionTypes from '../constants/cartConstants';

export const cartReducer = ( state = { cartItems: []}, action ) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART: 

              const item = action.payload;

              const existItem = state.cartItems.find ((x) =>  x.product.qty._id === item.product.qty._id);

            //   const samePrice = state.cartItems.find ((x) =>  x.product.qty._id && x.product.qty.price === item.product.qty._id && item.product.qty.price ); 

              
              if (existItem) {
                  return {
                      ...state,
                      cartItems: state.cartItems.map ((x) => x.product === existItem.product ? item : x)
                  }
              }

              else {
                  return {
                      ...state, 
                      cartItems: [...state.cartItems, item],
                  }
              }


            case actionTypes.REMOVE_FROM_CART: 
                  return {
                      ...state, 
                      cartItems: state.cartItems.filter ( (x) => x.product.qty._id !== action.payload)
                  }
        default: 
          return state; 
    }
}