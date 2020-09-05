import React, { Component } from 'react'

class Product extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        let { match } = this.props
        let name = match.params.name
        console.log(match)
        return (
            <div>
                   <h1>Product Detail</h1>
                    
            </div>
         
              
        )
    }
}
export default Product