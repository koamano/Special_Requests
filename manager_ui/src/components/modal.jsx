import React, { Component } from "react";
import TopicPanel from "./topicPanel";
import AddNoteForm from "./addNoteForm";
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

import { Accordion, Card } from "react-bootstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteModal: this.props.noteModal,
      activeItem: this.props.activeItem,
      prevItem: this.props.activeItem,
      noteItem: this.props.noteItem,
      showAddNoteForm: false
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };

  onHandleAddNote = () => {
    this.state.showAddNoteForm = true;
    const noteItem = {
      ...this.state.noteItem,
      request: this.state.activeItem.id
    };
    this.setState({ noteItem });
  };

  handleSave = currentItem => {
    const diff = this.props.findDiff(this.state.prevItem, currentItem);
    this.props.onSave(currentItem, diff);
  };

  render() {
    const { toggle, onSave, onSaveNote } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Request</ModalHeader>
        <modalBody>
          <form>
            <div className="form-row">
              <div className="col">
                <select
                  value={this.state.activeItem.status}
                  name="status"
                  onChange={this.handleChange}
                >
                  <option value="" disabled selected>
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
              <div className="col">
                <select
                  value={this.state.activeItem.store}
                  name="store"
                  onChange={this.handleChange}
                >
                  <option value="" disabled selected>
                    STORE LOCATION
                  </option>
                  <option value="college">College</option>
                  <option value="solano">Solano</option>
                </select>
              </div>
              <div className="col">
                <select
                  value={this.state.activeItem.type}
                  name="type"
                  onChange={this.handleChange}
                >
                  <option value="" disabled selected>
                    TYPE
                  </option>
                  <option value="Order">Order</option>
                  <option value="Transfer">Transfer</option>
                </select>
              </div>
              <div className="col">
                <select
                  value={this.state.activeItem.category}
                  name="category"
                  onChange={this.handleChange}
                >
                  <option value="" disabled selected>
                    CATEGORY
                  </option>
                  <option value="Footwear">Footwear</option>
                  <option value="Non-Footwear">Non-Footwear</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={this.state.activeItem.name}
                  onChange={this.handleChange}
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group col-md-6">
                <Label for="name">Phone</Label>
                <Input
                  type="text"
                  name="phone"
                  value={this.state.activeItem.phone}
                  onChange={this.handleChange}
                  placeholder="Enter Phone"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <Label for="vendor">Vendor</Label>
                <Input
                  type="text"
                  name="vendor"
                  value={this.state.activeItem.vendor}
                  onChange={this.handleChange}
                  placeholder="Enter Vendor"
                />
              </div>
              <div className="form-group col-md-6">
                <Label for="model">Model</Label>
                <Input
                  type="text"
                  name="model"
                  value={this.state.activeItem.model}
                  onChange={this.handleChange}
                  placeholder="Enter Model"
                />
              </div>
            </div>
            <div class="form-row">
              <div className="form-group col-md-4">
                <Label for="name">Size</Label>
                <Input
                  type="text"
                  name="size"
                  value={this.state.activeItem.size}
                  onChange={this.handleChange}
                  placeholder="Enter Size"
                />
              </div>
              <div className="form-group col-md-4">
                <Label for="name">Color</Label>
                <Input
                  type="text"
                  name="color"
                  value={this.state.activeItem.color}
                  onChange={this.handleChange}
                  placeholder="Enter Color"
                />
              </div>
              <div className="form-group col-md-4">
                <Label for="width">Width</Label>
                <Input
                  type="text"
                  name="width"
                  value={this.state.activeItem.width}
                  onChange={this.handleChange}
                  placeholder="Enter Width"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <Label for="itemNumber">Item Number</Label>
                <Input
                  type="text"
                  name="item_number"
                  value={this.state.activeItem.item_number}
                  onChange={this.handleChange}
                  placeholder="Enter Item Number"
                />
              </div>
              <div className="form-group col-md-4">
                <Label for="requestedBy">Requested By</Label>
                <Input
                  type="text"
                  name="requested_by"
                  value={this.state.activeItem.requested_by}
                  onChange={this.handleChange}
                  placeholder="Enter Requested By"
                />
              </div>
            </div>
            <FormGroup>
              <Label for="purchase_order">PO</Label>
              <Input
                type="text"
                name="purchase_order"
                value={this.state.activeItem.purchase_order}
                onChange={this.handleChange}
                placeholder="Enter PO"
              />
            </FormGroup>
          </form>
          <Card border="warning">
            <Card.Header>
              Notes{" "}
              <button
                onClick={this.onHandleAddNote}
                className="btn btn-warning float-right"
              >
                Add Note
              </button>
            </Card.Header>
            <Card.Body>
              {this.state.showAddNoteForm ? (
                <AddNoteForm
                  noteItem={this.state.noteItem}
                  onSaveNote={this.props.onSaveNote}
                ></AddNoteForm>
              ) : null}
              {this.props.notesList.length != 0 ? (
                <TopicPanel
                  topicList={this.props.notesList}
                  descriptionHeader="Notes"
                ></TopicPanel>
              ) : null}
            </Card.Body>
          </Card>
          <Accordion defaultActiveKey="1">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Expand History
                </Accordion.Toggle>
                <Button
                  color="success"
                  className="float-right"
                  onClick={() => this.handleSave(this.state.activeItem)}
                >
                  Save
                </Button>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <TopicPanel
                    topicList={this.props.historyList}
                    descriptionHeader="Events"
                  ></TopicPanel>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          {/* {this.state.noteModal ? (
            <AddNoteModal
              noteItem={this.state.noteItem}
              noteToggle={this.props.noteToggle}
              onSaveNote={this.props.onSaveNote}
            ></AddNoteModal>
          ) : null} */}
        </modalBody>
      </Modal>
    );
  }
}
