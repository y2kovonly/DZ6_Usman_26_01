import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from "axios";

const initialState = {
  cart: [],
  products: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {...state, products: action.payload}
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    const resp = await axios.get('https://dummyjson.com/products?limit=10&skip=10')
    return dispatch({type: 'SET_PRODUCTS', payload: resp.data})
  }
}

export const store = createStore(cartReducer, applyMiddleware(thunk));