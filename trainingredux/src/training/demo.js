import { createStore } from 'redux'
import { status, sort } from './actions'
import myReducer from './reducers'

const store = createStore(myReducer)
console.log('Default: ', store.getState());
// thuc hien cong viec thay doi status
store.dispatch(status())
console.log('TOGGLE STATUS : ', store.getState())
// thuc hien cong viec sap xep name Z-A
store.dispatch(sort({
    by: 'name',
    value: -1 ,
}))
console.log('SORT:' , store.getState())


