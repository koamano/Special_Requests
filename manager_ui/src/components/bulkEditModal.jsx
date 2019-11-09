import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import { ModalFooter } from "react-bootstrap";

class BulkEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: this.props.selectedItems,
      editItems: [],
      status: "",
      purchase_order: ""
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    let selectedItems = this.state.selectedItems;
    selectedItems.forEach(item => (item[name] = value));
    this.setState({ selectedItems, [name]: value });
  };

  handlePrint = items => {
    const toPrint = JSON.stringify(items);
  };

  handleBulkSave = items => {
    let action = "BULK MODIFIED:";
    if (this.state.status) action += " status: " + this.state.status;
    if (this.state.purchase_order)
      action += " PO: " + this.state.purchase_order;
    this.props.onBulkEditSave(items, action);
  };

  render() {
    const { toggle } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Bulk Edit</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <select name="status" onChange={this.handleChange}>
                <option disabled selected>
                  STATUS
                </option>
                <option value="open">Open</option>
                <option value="ordered">Ordered</option>
                <option value="received">Received</option>
                <option value="done">Done</option>
                <option value="rejected">Rejected</option>
                <option value="bo">BO</option>
                <option value="archived">Archived</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="purchase_order"
                onChange={this.handleChange}
                placeholder="Enter PO"
              ></input>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
            className="float-right"
            color="success"
            onClick={() => this.handleBulkSave(this.state.selectedItems)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default BulkEditModal;
