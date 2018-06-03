import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import News from "./components/News";
import Navbar from "./components/Navbar";
import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <StickyHeader header={<Navbar />}>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/News" component={News} />
          </StickyHeader>
        </div>
      </Router>
    );
  }
}

export default App;
