import * as types from '../constants/ActionType';

export const addToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}
export const changeMessages = (message) => {
    return {
        type: types.CHANGE_MESSAGES,
        message
    }
}

export const removeProductInCart = (product) => {
    return {
        type: types.REMOVE_PRODUCT_IN_CART,
        product
    }
}

export const updateQuantityProductInCart = (product, quantity) => {
    return {
        type: types.UPDATE_QUANTITY_PRODUCT_IN_CART,
        product,
        quantity
    }
}