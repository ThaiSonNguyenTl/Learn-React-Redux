import React, { Component } from "react";
class Products extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="section">
        <h1 className="section-heading">List Of Products</h1>
        <div className="row">
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default Products;
