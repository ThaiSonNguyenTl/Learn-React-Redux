import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Product from './Product'

class Products extends Component{
    render() {
        let products = [
            {
                id: 1,
                slug: 'iphoneX',
                name: 'Iphone X',
                image: 'https://salt.tikicdn.com/ts/product/39/1f/f8/4512fe9898661b5f3746f91370a22158.jpg',
                price: 500,
                description: 'Design by Apple',
                
            },
            {
                id: 2,
                name: 'Iphone 11 pro',
                slug: 'iphone11pro',
                image: 'https://csmobiles.com/27945-large_default/apple-iphone-11-pro-max-64gb-gris.jpg',
                price: 1200,
                description: 'Design by Apple',
               
            },
            {
                id: 3,
                name: 'Iphone Xs max',
                slug: 'iphoneXs',
                image: 'https://bizweb.dktcdn.net/100/112/815/products/xs-max-vang-86d20f37-92ab-4803-9b02-1ba2726618bf.png?v=1558422064420',
                price: 1000,
                description: 'Design by Apple',
           
            },
        ]
        let { match } = this.props
        let url = match.url
        
        let product = products.map((product, index) =>
                                                    (<NavLink key={index} to={`${url}/${product.slug}`} className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                        <div className='card'>
                                                        <img className="card-img-top" src={product.image} alt=""/>
                                                        <div className="card-body">
                                                            <h4 className="card-title">{product.name}</h4>
                                                            <h5 className="card-text text-danger">{product.price} $</h5>
                                                            <p className="card-text">{product.description}</p>
                                                        </div>
                                                        </div>
                                                    </NavLink>)
        )
        return (
            <div className="container">
                <h1>Products Lists </h1>
                <div className="row">
                   {product}
                </div>
                <div className="row">
                    <Route path='/products/:name' component={Product} />
                      
                </div>
            </div>
        )
    }
}
export default Products