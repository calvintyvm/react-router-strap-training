import React, { Component } from "react";
import { Link, Router } from "react-router-dom";
import {
  Jumbotron,
  Grid,
  Row,
  Col,
  Image,
  Button,
  Media,
  Carousel
} from "react-bootstrap";
import "./styles.css";
import droneImage1 from "../../assets/e-1-c55885e9b95910920cb5caba54e042ca.png";
import droneImage2 from "../../assets/e-2-75badb9587a5b23c753d793855cb1508.png";
import droneImage3 from "../../assets/e-3-abec9da58eed5e2fa8ffe68806c4946c.png";
import iconImage1 from "../../assets/i1-4e7c42bb70ae2a497e27d45b06dcaac1.png";
import iconImage2 from "../../assets/i2-d10678c2c3ee716dd038fcdf707fc0fc.png";
import iconImage3 from "../../assets/i3-ff6641ae696f986b2ad7130e1db2e3b4.png";
import { Parallax, Background } from "react-parallax";
import background from "../../assets/kevin-chow-176761-unsplash.jpg";
import part2 from "../../assets/s2-product-dbb06ba8827281e30669e5e172a2a4df.jpg";

class Home extends Component {
  render() {
    return (
      <div class="main-container">
        <Grid className="jumbo-container">
          {/* <Jumbotron className="testing"> */}
          {/* <Link to="/about" className="learn-more">
              <Button bsStyle="dark" bsSize="large">
                Learn More
              </Button>
            </Link> */}
          {/* </Jumbotron> */}
          <Parallax className="testing " bgImage={background} strength={-100}>
            <div className="title-container">
              <h1 className="jumbo-title">NEXUS 5</h1>
              <h1 className="jumbo-title2">PRO</h1>
            </div>
          </Parallax>
        </Grid>
        <Media>
          <Media.Left>
            <Carousel>
              <Carousel.Item>
                <img className="image1" src={droneImage1} alt="thumbnail" />
                <Carousel.Caption />
              </Carousel.Item>
              <Carousel.Item>
                <img className="image1" src={droneImage2} alt="thumbnail" />
                <Carousel.Caption />
              </Carousel.Item>
              <Carousel.Item>
                <img className="image1" src={droneImage3} alt="thumbnail" />
                <Carousel.Caption />
              </Carousel.Item>
            </Carousel>
          </Media.Left>
          <div className="image1-body">
            <Media.Body>
              <Media.Heading>NEXUS 5 PRO</Media.Heading>
              <p className="body-1">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>
              <Row className="show-grid">
                <Col xs={6} md={4}>
                  <img className="icon1" src={iconImage1} alt="thumbnail" />
                  <p className="iconp">1-inch Image Sensor</p>
                </Col>
                <Col xs={6} md={4}>
                  <img className="icon2" src={iconImage2} alt="thumbnail" />
                  <p className="iconp">Mechanical Shutter</p>
                </Col>
                <Col xs={6} md={4}>
                  <img className="icon3" src={iconImage3} alt="thumbnail" />
                  <p className="iconp">4k</p>
                </Col>
              </Row>
            </Media.Body>
          </div>
        </Media>
        <div className="part2">
          <img className="part2-image" src={part2} alt="thumbnail" />
          <h1 className="part2-title">CAMERA WITH 1-INCH 20MP SENSOR</h1>
          <p className="part2-text">
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
