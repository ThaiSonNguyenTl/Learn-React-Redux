import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {
 
  
  onDelete = (id) => {
    if (confirm('Are you sure want to delete product?')) { // eslint-disable-line
      this.props.onDeleteProduct(id)
    }
  }
  render() {
    let { product, index } = this.props
    let statusName = product.status ? 'in stock' : 'out of stock'
    let statusClassName = product.status ? 'warning': 'secondary'
    return (
      <tr>
        <td scope="row">{index+1}</td>
        <td>{index}</td>
        <td>{product.name}</td>
        <td className='text-danger'>{product.price}</td>
        <td>
          <span className={`badge badge-${statusClassName}`}>{statusName}</span>
        </td>
        <td>
          <Link to={`/product/${product.id}/edit`} className="btn btn-primary">
            Edit
          </Link>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick = {() => this.onDelete(product.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default ProductItem;
