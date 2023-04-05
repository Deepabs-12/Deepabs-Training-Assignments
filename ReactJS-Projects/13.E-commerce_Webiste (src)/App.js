/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

/*import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Product from "./components/Product";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([
    { id: 1, name: "OnePlus 9 Pro", price: 969 },
    { id: 2, name: "OnePlus 9", price: 729 },
    { id: 3, name: "OnePlus 8T", price: 749 },
    { id: 4, name: "OnePlus Nord 2", price: 399 },
    { id: 5, name: "OnePlus Nord CE 5G", price: 299 }
  ]);

    
 
    
    function addToCart(product) {
    setCartItems([...cartItems, product]);
    }
    
    function removeFromCart(item) {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(newCartItems);
    }
    
    function showTotalAmount() {
      alert(`Total amount: ${items.reduce((acc, item) => acc + item.price, 0)} USD`);

    }
    
    return (
    <div className="app">
    
    <ProductList products={products} onAddToCart={addToCart} />
    <Cart items={cartItems} onRemoveFromCart={removeFromCart} />
    <button onClick={showTotalAmount}>Show Total Amount</button>

    </div>
    );
    }
    
    export default App;*/

    import React from 'react';
    import './App.css';
    import Chocolate from './components/Chocolate';
    
    function App() {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Amul Chocolate Shop</h1>
          </header>
          <main>
            <Chocolate />
          </main>
          <footer>
            <p>&copy; 2022 Amul Chocolate Shop</p>
          </footer>
        </div>
      );
    }
    
    export default App;
    