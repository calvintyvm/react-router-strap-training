import React, { Component, Fragment } from "react";
import "./App.css";
import Home from "./Containers/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Containers/About";
import News from "./Containers/News";
import Navbar from "./Containers/Navbar";
import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";
import MyContextProvider from "./context/MyContextProvider/MyContextProvider";

class App extends Component {
  render() {
    return (
      <Router>
        <MyContextProvider>
          <Fragment>
            <StickyHeader header={<Navbar />} />
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/News" component={News} />
          </Fragment>
        </MyContextProvider>
      </Router>
    );
  }
}

export default App;
