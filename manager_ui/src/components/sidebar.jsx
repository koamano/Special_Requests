import React, { Component } from "react";
import { elastic as Menu } from "react-burger-menu";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { filterItems: [] };
  }

  handleAlllClick = () => {
    // this.props.onAllFilter(this.state.filterItems);
    this.props.onCategoryFilter("footwear");
  };

  handleChange = e => {
    let { name, value } = e.target;
    const filterItems = { ...this.state.filterItems, [name]: value };
    this.setState({ filterItems });
  };

  handleTypeChange = e => {
    let { name, value } = e.target;
    this.props.onTypeFilter(value);
  };
  handleCategoryChange = e => {
    let { name, value } = e.target;
    this.props.onCategoryFilter(value);
  };

  render() {
    return (
      <Menu noOverlay width={260}>
        <form>
          <div className="form-group">
            <label for="storeSelect">Store:</label>
            <select
              onChange={this.handleChange}
              className="black-font m-2"
              name="store"
              id="storeSelect"
            >
              <option value="" disabled selected>
                STORE LOCATION
              </option>
              <option className="black-font" value="college">
                College
              </option>
              <option className="black-font" value="solano">
                Solano
              </option>
            </select>
          </div>
          <div className="form-group">
            <label for="typeSelect">Type: </label>
            <select
              onChange={this.handleChange}
              className="black-font m-2"
              name="type"
              id="typeSelect"
            >
              <option value="" disabled selected>
                Type
              </option>
              <option className="black-font" value="order">
                Order
              </option>
              <option className="black-font" value="transfer">
                Transfer
              </option>
            </select>
          </div>
          <div className="form-group">
            <label for="categorySelect">Category: </label>
            <select
              onChange={this.handleChange}
              className="black-font m-2"
              name="category"
              id="categorySelect"
            >
              <option value="" disabled selected>
                Category
              </option>
              <option className="black-font" value="footwear">
                Footwear
              </option>
              <option className="black-font" value="non-footwear">
                Non-Footwear
              </option>
            </select>
          </div>
          <button color="success" onClick={() => this.handleAllClick}>
            Submit
          </button>
        </form>
      </Menu>
    );
  }
}
