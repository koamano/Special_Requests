import React, { Component } from "react";

export default class TopicPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicList: this.props.topicList
    };
  }

  renderPanelData() {
    if (this.state.topicList) {
      return this.state.topicList.map(topic => (
        <tr key={topic.request}>
          <td>{topic.create_date}</td>
          <td>{topic.author}</td>
          <td>{topic.text}</td>
        </tr>
      ));
    }
    return null;
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead class="thead-light">
            <tr>
              <th>Date</th>
              <th>By</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>{this.renderPanelData()}</tbody>
        </table>
      </div>
    );
  }
}
