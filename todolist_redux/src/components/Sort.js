import React, { Component } from "react";

class Sort extends Component {
  
  onClick = (sortBy, sortValue) => {
    this.props.onSort(sortBy,sortValue)
  };
  render() {
    
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
              className={this.props.sortBy==='name' && this.props.sortValue === 1 ? 'fas fa-check': ''}
            >
            </a>
          </li>
          <li className='dropdown-item' onClick={() => this.onClick("name", -1)}>
          <span className="fas fa-sort-alpha-down mr-5"> Z-A</span>
            <a
              className={this.props.sortBy==='name' && this.props.sortValue === -1 ? 'fas fa-check': ''}
            >
            </a>
          </li>

          <div className="dropdown-divider"></div>
          <li className='dropdown-item' onClick={() => this.onClick("status", 1)}>
            <span className='mr-5'>Activate</span>
            <a
              className={this.props.sortBy==='status' && this.props.sortValue === 1 ? 'fas fa-check': ''}
              >
              </a>
            </li>
          <li className='dropdown-item' onClick={() => this.onClick("status", -1)}>
            <span className='mr-5'>Deactivate</span>
            <a
              className={this.props.sortBy==='status' && this.props.sortValue === -1 ? 'fas fa-check': ''}
              >
              </a>
            </li>
       
        </div>
      </div>
    );
  }
}
export default Sort;
