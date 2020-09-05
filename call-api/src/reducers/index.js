import { combineReducers } from 'redux';
import products from './products';
import productEditing from './productEditing';
const appReducers = combineReducers({
    products,
    productEditing
})

export default appReducers