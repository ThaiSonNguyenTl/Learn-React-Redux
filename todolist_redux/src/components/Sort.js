import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actions from '../actions';
class Sort extends Component {
   
  onClick = (sortBy,sortValue) => {
    this.props.onSort({
      by: sortBy,
      value: sortValue
    })
  };
  render() {
    let { sort } = this.props
    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sort
        </button>
        <div className="dropdown-menu">
          <li className='dropdown-item' onClick={() => this.onClick("name", 1)}> 
          <span className="fas fa-sort-alpha-down mr-5"> A-Z</span>
            <a
              className={sort.by==='name' && sort.value === 1 ? 'fas fa-check': ''}
            >
            </a>
          </li>
          <li className='dropdown-item' onClick={() => this.onClick("name", -1)}>
          <span className="fas fa-sort-alpha-down mr-5"> Z-A</span>
            <a
              className={sort.by==='name' && sort.value === -1 ? 'fas fa-check': ''}
            >
            </a>
          </li>

          <div className="dropdown-divider"></div>
          <li className='dropdown-item' onClick={() => this.onClick("status", 1)}>
            <span className='mr-5'>Activate</span>
            <a
              className={sort.by==='status' && sort.value === 1 ? 'fas fa-check': ''}
              >
              </a>
            </li>
          <li className='dropdown-item' onClick={() => this.onClick("status", -1)}>
            <span className='mr-5'>Deactivate</span>
            <a
              className={sort.by==='status' && sort.value === -1 ? 'fas fa-check': ''}
              >
              </a>
            </li>
       
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sort : state.sortTask
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSort : (sort) => dispatch(actions.sortTask(sort))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sort);
