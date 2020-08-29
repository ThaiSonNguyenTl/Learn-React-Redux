import React, { Component } from "react";
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import MessageContainer from './containers/MessageContainer';
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <main id="mainContainer">
          <div className="container">
            <Header />
            <ProductsContainer />
            <MessageContainer />
            <CartContainer />  
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
