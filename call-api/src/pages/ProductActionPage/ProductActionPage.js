import React, { Component } from "react";
import callApi from '../../utils/apiCaller';
import {Link} from 'react-router-dom';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from "../../actions";
import { connect } from "react-redux";


class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      nameProd: "",
      priceProd: "",
      chkbStatus: "",
    };
  }
  onHandleChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    let {id, nameProd, priceProd, chkbStatus } = this.state
    let { history } = this.props
    let product = {
      id: id,
      name: nameProd,
      price: priceProd,
      status: chkbStatus
    }
    if (id) { // update
      // callApi(`products/${id}`, 'PUT', {
      //   name: nameProd,
      //   price: priceProd,
      //   status: chkbStatus
      // }).then(res => history.goBack())
      this.props.updateProductRequest(product)
    } else {
      this.props.addProductRequest(product)
    }
    history.goBack()
  };

  componentDidMount() {
    let { match } = this.props
    if (match) {
      let id = match.params.id
      // callApi(`products/${id}`, 'GET', null).then(res => {
      //   let data = res.data
      //   this.setState({
      //     id: data.id,
      //     nameProd: data.name,
      //     priceProd: data.price,
      //     chkbStatus: data.status
      //   })
      // })
      this.props.getProductEditing(id)
    }
  }
/*sau khi component did mount dc goi no da tien hanh dispatch cai action va 
luu cai productEditing vao store .
cta thuc hien mapStateToProps (chuyen state tren store thanh props) de life circle
component will receive props nhan dc props
life circle nay chay sau component did mount
  */
  componentWillReceiveProps = (nextProps) => {
    // console.log(nextProps)
    if (nextProps && nextProps.productEditing) {
      let { productEditing } = nextProps
      this.setState({
        id: productEditing.id,
        nameProd: productEditing.name,
        priceProd: productEditing.price,
        chkbStatus: productEditing.status
      })
    }
  }
  render() {
    let { nameProd, priceProd, chkbStatus } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSubmit} className="mt-4">
          <div className="form-group">
            <label className="font-weight-bold">Name:</label>
            <input
              type="text"
              name="nameProd"
              className="form-control"
              value={nameProd}
              onChange={this.onHandleChange}
            />
          </div>
          <div className="form-group">
            <label className="font-weight-bold">Price:</label>
            <input
              type="number"
              name="priceProd"
              className="form-control"
              value={priceProd}
              onChange={this.onHandleChange}
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={chkbStatus}
              checked={chkbStatus}
              name="chkbStatus"
              onChange={this.onHandleChange}
            />
            <label className="form-check-label font-weight-bold">In Stock</label>
          </div>
          <Link to='/product-list' className='btn btn-danger mr-3 mt-5'>Cancel</Link>
          <button type="submit" className="btn btn-primary mt-5">
            Save
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productEditing: state.productEditing
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    addProductRequest: (product) => dispatch(actAddProductRequest(product)),
    getProductEditing: (id) => dispatch(actGetProductRequest(id)),
    updateProductRequest: (product) => dispatch(actUpdateProductRequest(product))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage);
