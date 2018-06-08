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
import { Tabs } from "antd";
import "./styles.css";
import droneImage1 from "../../assets/e-1-c55885e9b95910920cb5caba54e042ca.png";
import droneImage2 from "../../assets/e-2-75badb9587a5b23c753d793855cb1508.png";
import droneImage3 from "../../assets/e-3-abec9da58eed5e2fa8ffe68806c4946c.png";
import droneImage4 from "../../assets/e-4-b763d7d89a1ad88852d8eb791ce72fae.png";
import droneImage5 from "../../assets/e-5-50c566b539a8813afbaa6a64080723c5.png";
import droneImage6 from "../../assets/e-6-aa05ac9435bad40cb7df3e039d1012ff.png";
import iconImage1 from "../../assets/i1-4e7c42bb70ae2a497e27d45b06dcaac1.png";
import iconImage2 from "../../assets/i2-d10678c2c3ee716dd038fcdf707fc0fc.png";
import iconImage3 from "../../assets/i3-ff6641ae696f986b2ad7130e1db2e3b4.png";
import { Parallax, Background } from "react-parallax";
import Draggable from "react-draggable";
import background from "../../assets/kevin-chow-176761-unsplash.jpg";
import part2 from "../../assets/s2-product-dbb06ba8827281e30669e5e172a2a4df.jpg";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import Fade from "react-reveal/Fade";
import { MyContext } from "../../context/MyContextProvider/MyContextProvider";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 }
];

const data2 = [
  { name: "Page A", uv: 6000, pv: 4400, amt: 2450 },
  { name: "Page B", uv: 5000, pv: 3398, amt: 2910 },
  { name: "Page C", uv: 3000, pv: 8800, amt: 2190 },
  { name: "Page D", uv: 1780, pv: 1908, amt: 2900 }
];

const ButtonTrue = styled.button`
border-radius: 3px;
padding: 0.25em 5em;
margin: 0 1em;
margin-top: 3em
border: 2px solid black;
`;

const ButtonFalse = styled.button`
border-radius: 3px;
padding: 0.25em 5em;
margin: 0 1em;
margin-top: 3em
border: 2px solid black;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOther: false
    };
    this.showTrue = this.showTrue.bind(this);
    this.showFalse = this.showFalse.bind(this);
  }
  showTrue() {
    this.setState({ showOther: true });
  }
  showFalse() {
    this.setState({ showOther: false });
  }

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const TabPane = Tabs.TabPane;
    return (
      <div className="main-container">
        <Grid className="jumbo-container">
          <Parallax className="testing " bgImage={background} strength={-100}>
            <div className="title-container">
              <h1 className="jumbo-title">NEXUS 5</h1>
              <h1 className="jumbo-title2">PRO</h1>
            </div>
          </Parallax>
        </Grid>
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <Media>
                <Media.Left>
                  {context.state.showOther == false ? (
                    <Carousel className="carousel-fade">
                      <Carousel.Item>
                        <img
                          className="image1"
                          src={droneImage1}
                          alt="thumbnail"
                        />
                        <Carousel.Caption />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="image1"
                          src={droneImage2}
                          alt="thumbnail"
                        />
                        <Carousel.Caption />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="image1"
                          src={droneImage3}
                          alt="thumbnail"
                        />
                        <Carousel.Caption />
                      </Carousel.Item>
                    </Carousel>
                  ) : (
                    <Carousel className="carousel-fade">
                      <Carousel.Item>
                        <img
                          className="image1"
                          src={droneImage4}
                          alt="thumbnail"
                        />
                        <Carousel.Caption />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="image1"
                          src={droneImage5}
                          alt="thumbnail"
                        />
                        <Carousel.Caption />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="image1"
                          src={droneImage6}
                          alt="thumbnail"
                        />
                        <Carousel.Caption />
                      </Carousel.Item>
                    </Carousel>
                  )}
                </Media.Left>

                <div className="image1-body">
                  <Fade bottom>
                    <Media.Body>
                      <Media.Heading>NEXUS 5 PRO</Media.Heading>
                      <p className="body-1">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin commodo. Cras purus
                        odio, vestibulum in vulputate at, tempus viverra turpis.
                        Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
                      </p>
                      <Row className="show-grid">
                        <Col xs={6} md={4}>
                          <img
                            className="icon1"
                            src={iconImage1}
                            alt="thumbnail"
                          />
                          <p className="iconp">1-inch Image Sensor</p>
                        </Col>
                        <Col xs={6} md={4}>
                          <img
                            className="icon2"
                            src={iconImage2}
                            alt="thumbnail"
                          />
                          <p className="iconp">Mechanical Shutter</p>
                        </Col>
                        <Col xs={6} md={4}>
                          <img
                            className="icon3"
                            src={iconImage3}
                            alt="thumbnail"
                          />
                          <p className="iconp">4k</p>
                        </Col>
                        <ButtonTrue
                          style={{
                            background: `${
                              context.state.showOther == true
                                ? "black"
                                : "white"
                            }`,
                            color: `${
                              context.state.showOther !== true
                                ? "black"
                                : "white"
                            }`
                          }}
                          onClick={context.showTrue}
                        >
                          Black
                        </ButtonTrue>
                        <ButtonFalse
                          style={{
                            background: `${
                              context.state.showOther !== true
                                ? "black"
                                : "white"
                            }`,
                            color: `${
                              context.state.showOther == true
                                ? "black"
                                : "white"
                            }`
                          }}
                          onClick={context.showFalse}
                        >
                          White
                        </ButtonFalse>
                      </Row>
                    </Media.Body>
                  </Fade>
                </div>
              </Media>
            </React.Fragment>
          )}
        </MyContext.Consumer>
        <div className="part2">
          <Draggable axis="x" {...dragHandlers}>
            <div>
              <img className="part2-image" src={part2} alt="thumbnail" />
            </div>
          </Draggable>
          <Fade left cascade>
            <div className="part2-container">
              <h1 className="part2-title">CAMERA WITH 1-INCH 20MP SENSOR</h1>
              <p className="part2-text">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>
            </div>
          </Fade>
        </div>
        <div className="part3">
          <Fade top>
            <h1 className="part3-center">Our Trusted Stats.</h1>
            <div className="bar-container">
              <div className="barChart">
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
                <BarChart
                  width={500}
                  height={300}
                  data={data2}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
              </div>
              <Fade left cascade>
                <div className="bar-text">
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis.
                  </p>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis.
                  </p>
                </div>
              </Fade>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Home;
