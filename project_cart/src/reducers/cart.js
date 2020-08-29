import * as types from '../constants/ActionType';

let data = JSON.parse(localStorage.getItem('cart'))
const initialState = data ? data : []
const cart = (state = initialState, action) => {
    let { product, quantity } = action

    switch (action.type) {
        case types.ADD_TO_CART:
            let index = findProductInCart(state, product)
            if (index !== -1) {
                state[index].quantity += quantity
            } else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('cart',JSON.stringify(state))
            return [...state]
        case types.REMOVE_PRODUCT_IN_CART:
            let indexProductRemove = findProductInCart(state, product)
            if (indexProductRemove !== -1) {
                state.splice(indexProductRemove,1)
            }
            localStorage.setItem('cart',JSON.stringify(state))
            return [...state]
        case types.UPDATE_QUANTITY_PRODUCT_IN_CART:
            let indexProductUpdate = findProductInCart(state, product)
            if (indexProductUpdate !== -1) {
                state[indexProductUpdate].quantity = quantity
            }
            localStorage.setItem('cart',JSON.stringify(state))
            return [...state]
        default: 
            return [...state]
    }
}

let findProductInCart = (cart, product) => {
    let index = -1 // not found
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++){
            if (cart[i].product.id === product.id) {
                index = i
                break
            }
        }
    }
    return index
}

export default cart