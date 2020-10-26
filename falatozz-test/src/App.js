import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Routes/Login.js";
import Register from "./Routes/Register.js";
import Products from "./Routes/Products.js";
import Cart from "./Routes/Cart.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/products" component={Products}/>
        <Route exact path="/cart" component={Cart}/>
      </Router>
    </div>
  );
}

export default App;
