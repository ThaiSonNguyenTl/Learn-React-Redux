import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import * as Messages from '../constants/Messages';
import * as actions from '../actions';
class CartContainer extends Component{
    constructor(props) {
        super(props)
    }
    showProductInCart(cart) {
        let result = <tr>
                        <td>
                           <h4 className='font-weight-bold'>{ Messages.MSG_CART_EMPTY }</h4> 
                        </td>
                     </tr>
           
        if (cart.length > 0) {
            let {onRemoveProductInCart,onChangeMessage,onUpdateQuantityProductInCart} = this.props
            result = cart.map((cartItem, index) => <CartItem
                                                        key={index}
                                                        cartItem={cartItem}
                                                        onRemoveProductInCart={onRemoveProductInCart}
                                                        onChangeMessage={onChangeMessage}
                                                        updateQuantityProductInCart={onUpdateQuantityProductInCart}
                                                    />)
        }
        return result
    }
    showTotalAmount(cart) {
        let result = null
        if (cart.length > 0) {
            result =  <CartResult cart={cart} />
        }
        return result
    }
    render() {
        let { cart } = this.props
        return (
            <Cart>
                {this.showProductInCart(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        )
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf({
        product:  PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number
        }),
        quantity: PropTypes.number.isRequired,
        onRemoveProductInCart: PropTypes.func.isRequired,
        onChangeMessage: PropTypes.func.isRequired,
        onUpdateQuantityProductInCart: PropTypes.func.isRequired
    }).isRequired
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onRemoveProductInCart: (product) => dispatch(actions.removeProductInCart(product)),
        onChangeMessage: (message) => dispatch(actions.changeMessages(message)),
        onUpdateQuantityProductInCart: (product,quantity) => dispatch(actions.updateQuantityProductInCart(product,quantity))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer)