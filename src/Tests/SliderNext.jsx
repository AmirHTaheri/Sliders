import React, { Component } from "react";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class SliderTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 100,
      present: 10
    };
  }

  onSliderChange = e => {
    this.setState({ present: e.target.value });
  };

  onMinChange = e => {
    this.setState({
      min: +e.target.value || 0
    });
  };
  onMaxChange = e => {
    this.setState({
      present: +e.target.value || 100
    });
  };

  render() {
    const wrapperStyle = { width: 400, margin: 50 };
    return (
      <Form>
        <FormGroup>
          <Input
            id="typeinp"
            type="range"
            min={this.state.min}
            max={this.state.max}
            maxLength="100"
            value={this.state.present}
            onChange={this.onSliderChange}
            step="1"
          />

          <br />
          <label>Test: </label>
          <Input
            type="number"
            value={this.state.present}
            onChange={this.onMaxChange}
            name="inputDegree"
          />
          <br />
          <input value={this.state.present} />
        </FormGroup>
      </Form>
    );
  }
}

export default SliderTest;
