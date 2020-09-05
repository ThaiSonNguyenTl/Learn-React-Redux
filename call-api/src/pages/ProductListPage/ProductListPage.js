import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actFetchProductRequest, actDeleteProductRequest} from '../../actions';
class ProductListPage extends Component {
  
  componentDidMount() {
    // duoc goi sau khi component render lan dau
    // console.log('component did mount duoc goi')
    this.props.fetchProductsRequest()
  }

  onDeleteProduct = (id) => {
    this.props.deleteProductRequest(id)
  }

  
  render() {
    let {products} = this.props
    // console.log('component render lan dau')
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to='/product/add' className="btn btn-primary mt-4">
          Add Product
        </Link>
        <div className="mt-4">
          <ProductList>{this.showProducts(products)}</ProductList>
        </div>
      </div>
    );
  }
  showProducts = (products) => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          index={index}
          onDeleteProduct={this.onDeleteProduct}
        />
      ));
    }
    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchProductsRequest: () => dispatch(actFetchProductRequest()),
    deleteProductRequest: (id) => dispatch(actDeleteProductRequest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
