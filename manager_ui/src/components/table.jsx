import React, { Component } from "react";
import StatusButton from "./statusButton";
class Table extends Component {
  constructor(props) {
    super(props);
  }

  //   renderTableHeader() {

  //     return (<th>StATUS</th>
  //         <th>STORE</th>
  //         <th>TYPE</th>
  //         <th>DATE</th>
  //         <th>ID</th>
  //         <th>NAME</th>
  //         <th>REQUESTED_BY</th>
  //     )
  //   }

  renderTableData() {
    const { useFilterView, filterViewList, viewList } = this.props;
    if (useFilterView === true) {
      return filterViewList.map(request => (
        <tr key={request.id}>
          <td>{request.id}</td>
          <td>
            <StatusButton activeItem={request}></StatusButton>
          </td>
          <td>{request.store}</td>
          <td>{request.type}</td>
          <td>{request.date}</td>
          <td>{request.name}</td>
          <td>{request.requested_by}</td>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.props.onEdit(request)}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.props.onHistory(request)}
          >
            History
          </button>
        </tr>
      ));
    }
    return viewList.map(request => (
      <tr key={request.id}>
        <td>{request.id}</td>
        <StatusButton activeItem={request}></StatusButton>
        <td>{request.store}</td>
        <td>{request.type}</td>
        <td>{request.date}</td>
        <td>{request.name}</td>
        <td>{request.requested_by}</td>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => this.props.onEdit(request)}
        >
          Edit
        </button>
      </tr>
    ));
  }

  render() {
    // const printList = this.props.viewList.map(request => (
    //   <li>{request.store}</li>
    // ));
    return (
      <div>
        {/* <ul>{printList}</ul> */}
        <table className="table">
          <thead class="thead-light">
            <tr>
              <th>ID</th>
              <th>STATUS</th>
              <th>STORE</th>
              <th>TYPE</th>
              <th>DATE</th>
              <th>NAME</th>
              <th>REQUESTED_BY</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
