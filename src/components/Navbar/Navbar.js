import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

class CNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
      isTop: true
    };
  }
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 635;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }
  render() {
    return (
      <Navbar
        default
        collapseOnSelect
        style={{
          background: this.state.isTop
            ? "rgba(0, 0, 0, 0)"
            : "rgba(0, 0, 0, 0.8)"
        }}
      >
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"> Testing</Link>
            {/* Scroll {this.state.isTop ? "down" : "up"}! */}
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/About">
              About
            </NavItem>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/News">
              News
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CNavbar;
