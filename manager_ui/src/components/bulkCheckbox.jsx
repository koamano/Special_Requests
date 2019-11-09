import React, { Component } from "react";

class BulkCheckBox extends Component {
  state = {};
  render() {
    return (
      <input
        type="checkbox"
        onClick={this.props.onBulkEdit}
        checked={this.props.checked}
      ></input>
    );
  }
}

export default BulkCheckBox;
