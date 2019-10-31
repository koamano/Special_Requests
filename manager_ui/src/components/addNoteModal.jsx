import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

export default class AddNoteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteItem: this.props.noteItem
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    const noteItem = { ...this.state.noteItem, [name]: value };
    this.setState({ noteItem });
  };

  render() {
    const { noteToggle, onSaveNote } = this.props;
    return (
      <Modal isOpen={true} toggle={noteToggle}>
        <ModalHeader toggle={noteToggle}>Add New Note</ModalHeader>
        <modalBody>
          <Form>
            <FormGroup>
              <Label for="Author">Name</Label>
              <Input
                type="text"
                name="author"
                value={this.state.noteItem.author}
                onChange={this.handleChange}
                placerholder="Enter Name"
              ></Input>
              <Label for="notes">Note</Label>
              <Input
                type="text"
                name="text"
                value={this.state.noteItem.text}
                onChange={this.handleChange}
                placerholder="Enter Note"
              ></Input>
            </FormGroup>
          </Form>
        </modalBody>
        <ModalFooter>
          <Button
            color="success"
            className="float-right"
            onClick={() => onSaveNote(this.state.noteItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
