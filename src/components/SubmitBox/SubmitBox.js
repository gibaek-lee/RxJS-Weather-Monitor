import React, { Component } from 'react';
import './SubmitBox.css';
import { Observable } from 'rxjs';

class SubmitBox extends Component {
  static defaultProps = {
    handleInfoUpdate: () => null
  }
  state = {
    value: ''
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }
  render () {
    const { value } = this.state;
    const { handleInfoUpdate } = this.props;
    return (
      <div id="form">
        <label>zipcode-input: </label>
        <input
          type="text"
          id="zipcode-input"
          value={value}
          onChange={this.handleChange}
        />
        <button
          id="add-location"
          onClick={()=>handleInfoUpdate(value)}
        >
          Add location
        </button>
      </div>
    );
  }
}

export default SubmitBox
