import {  combineReducers } from 'redux'
import products from './products';
import cart from './cart';
import changeMessages from './message';
const appReducer = combineReducers({
    products,
    cart,
    changeMessages
})

export default appReducer