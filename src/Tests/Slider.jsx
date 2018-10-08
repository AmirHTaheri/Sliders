import React, { Component } from "react";

/* eslint react/no-multi-comp: 0, max-len: 0 */
import "rc-slider/assets/index.css";

import ReactDOM from "react-dom";
import Slider, { createSliderWithTooltip } from "rc-slider";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const style = { width: 600, margin: 50 };

function log(value) {
  console.log(value); //eslint-disable-line
}

class DynamicBounds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 100,
      present: 10
    };
  }
  onSliderChange = e => {
    log(e);
    this.setState({ present: e.target.value });
  };
  onMinChange = e => {
    this.setState({
      min: +e.target.value || 0
    });
  };
  onMaxChange = e => {
    this.setState({
      max: +e.target.value || 100
    });
  };
  render() {
    return (
      <Form>
        <FormGroup>
          <div>
            <label>Min: </label>
            <input
              type="number"
              value={this.state.min}
              onChange={this.onMinChange}
            />
            <br />
            <label>Max: </label>
            <input
              type="number"
              value={this.state.max}
              onChange={this.onMaxChange}
            />
            <br />
            <br />
            <Slider
              defaultValue={50}
              min={this.state.min}
              max={this.state.max}
              defaultValue={this.state.present}
              onChange={this.onSliderChange}
            />
          </div>
        </FormGroup>
      </Form>
    );
  }
}

class SliderSlider extends Component {
  render() {
    return (
      <div>
        <div style={style}>
          <p>Slider with dynamic `min` `max`</p>
          <DynamicBounds />
        </div>
      </div>
    );
  }
}

export default SliderSlider;
