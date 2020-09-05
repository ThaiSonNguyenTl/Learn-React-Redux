import React, { Component } from "react";
class ProductList extends Component {
  render() {
    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>STT</th>
            <th>Code</th>
            <th>Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.children}
        </tbody>
      </table>
    );
  }
}
export default ProductList;
