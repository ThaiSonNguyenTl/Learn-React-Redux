import React, { Component } from "react";

class CartResult extends Component {
  constructor(props) {
    super(props);
  }
  totalAmount = (cart) => {
    
    let total = cart.reduce((currentTotal, cartItem) => (currentTotal + cartItem.product.price * cartItem.quantity),0)
    return total
  }
  render() {
    let {cart} = this.props
    return (
      <tr>
        <td colSpan={3} />
        <td>
          <h4>
            <strong>Total</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{this.totalAmount(cart)}$</strong>
          </h4>
        </td>
        <td colSpan={3}>
          <button
            type="button"
            className="btn btn-primary waves-effect waves-light"
          >
            Complete purchase
            <i className="fa fa-angle-right right" />
          </button>
        </td>
      </tr>
    );
  }
}
export default CartResult;
