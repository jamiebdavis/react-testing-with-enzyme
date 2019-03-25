import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

class App extends Component {
  state = {
    name: "Jamie Davis",
    age: "33",
    email: "jjj@jjj.com"
  };
  render() {
    return (
      <div className="App">
        <h4>React testing with enzyme</h4>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
