import React, { Component } from "react";

/* eslint react/no-multi-comp: 0, max-len: 0 */
import "rc-slider/assets/index.css";
import Slider, { createSliderWithTooltip } from "rc-slider";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const style = { width: 600, margin: 50 };

function log(value) {
  console.log(value); //eslint-disable-line
}

class DynamicBounds extends React.Component {
  constructor(props) {
    super(props);
    this.onSliderChange = this.onSliderChange.bind(this);
    this.state = {
      min: 0,
      max: 100,
      present: 10
    };
  }
  onSliderChange = e => {
    log(e);
    this.setState({ present: +e || 100 });
  };
  onMinChange = e => {
    this.setState({
      min: +e.target.value || 0
    });
    console.log(this.state.min);
  };
  onMaxChange = e => {
    this.setState({
      present: +e.target.value || 100
    });
  };
  render() {
    return (
      <Form>
        <FormGroup>
          <div>
            <label>Quantity: </label>
            <Input
              type="number"
              value={this.state.present}
              onChange={this.onMaxChange}
            />
            <br />
            <br />
            <Slider
              min={this.state.min}
              max={this.state.max}
              value={this.state.present}
              onChange={this.onSliderChange}
              step="1"
              defaultValue="10"
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
