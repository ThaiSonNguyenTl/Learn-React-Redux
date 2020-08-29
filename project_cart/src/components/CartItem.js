import React, { Component } from "react";
import * as Message from '../constants/Messages';
class CartItem extends Component {
 
  calculateTotal(price, quantity) {
    return price * quantity
  }

  removeProductInCart = (product) => {
    let {onRemoveProductInCart, onChangeMessage} = this.props
        onRemoveProductInCart(product)
        onChangeMessage(Message.MSG_REMOVE_PRODUCT_IN_CART_SUCCESS)
  }

  onUpdateQuantity = (product, quantityAfter) => {
    if (quantityAfter > 0) {
      let {updateQuantityProductInCart,onChangeMessage} = this.props
      updateQuantityProductInCart(product, quantityAfter)
      onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS)
    }
  }
  render() {
    let { cartItem } = this.props
    // console.log(cartItem)
    let { quantity } = cartItem
    return (
      <tr>
        <th scope="row">
          <img
            src={cartItem.product.image}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{cartItem.product.name}</strong>
          </h5>
        </td>
        <td>{cartItem.product.price} $</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick = {() => this.onUpdateQuantity(cartItem.product,cartItem.quantity-1)}
            >
              <a>—</a>
            </label>
            <label
              onClick = {() => this.onUpdateQuantity(cartItem.product,cartItem.quantity+1)}
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.calculateTotal(cartItem.product.price,cartItem.quantity)}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            data-original-title="Remove item"
            onClick = {() => this.removeProductInCart(cartItem.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}
export default CartItem;
