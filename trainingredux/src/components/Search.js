import React, { Component } from 'react'

class Search extends Component{
    constructor(props) {
        super(props)
        this.state = {
            keyword: ''
        }
    }
    
    onHandleChange = (event) => {
        let target = event.target
        let name = target.name
        let value = target.value
        this.setState({
            [name]: value,
        })
    }
    onSearch = () => {
        this.props.onSearch(this.state.keyword)
    }
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        name="keyword"
                        placeholder="Search..."
                        value={this.state.keyword}
                        onChange={this.onHandleChange}
                    />
                    <button
                        className="btn btn-primary fa fa-search"
                        type="button"
                        onClick= {this.onSearch}
                    >
                        Go
                    </button>
                </div>
            </div>
       
        );
    }
}
export default Search