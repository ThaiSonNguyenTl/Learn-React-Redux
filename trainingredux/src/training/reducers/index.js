import sort from './sort'
import status from './status'
import { combineReducers } from 'redux'
import sort from './sort'

const myReducer = combineReducers({
    status,
    sort
})
export default myReducer