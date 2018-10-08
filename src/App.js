import React, { Component } from "react";
import "./App.css";
import SliderSlider from "./Tests/Slider";
import SliderTest from "./Tests/SliderNext";
import { Container, Row, Col } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="12">
              <SliderSlider />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
