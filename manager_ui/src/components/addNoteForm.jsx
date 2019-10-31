import React, { Component } from "react";
class AddNoteForm extends Component {
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
    return (
      <form>
        <div className="form-group">
          <textarea
            className="form-control"
            name="text"
            value={this.state.noteItem.text}
            onChange={this.handleChange}
            placeholder="Enter Note"
          ></textarea>
        </div>
        <div className="form-group float-right">
          <input
            type="text"
            name="author"
            value={this.state.noteItem.author}
            onChange={this.handleChange}
            placeholder="Entered by"
          ></input>
          <button
            type="submit"
            className="btn btn-primary m-2"
            onClick={() => this.props.onSaveNote(this.state.noteItem)}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default AddNoteForm;
