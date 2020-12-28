import React, { Component } from 'react';
import axios from "axios"
import "./App.css"

class App extends Component {

  componentDidMount() {
    axios.get("/api/product/brands")
    .then(res => console.log(res.data))
  }
  

  render() {
    return (
      <>
        <h1>React App</h1>
      </>
    );
  }
}

export default App;
