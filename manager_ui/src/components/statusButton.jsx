import React, { Component } from "react";
class StatusButton extends Component {
  constructor(props) {
    super(props);
  }
  //   state = { badgeLabel: "", badgeClass: "" };

  renderBadge = () => {
    const { status } = this.props.activeItem;
    let badgeLabel = "";
    let badgeClass = "";
    switch (status.toUpperCase()) {
      case "OPEN":
        badgeLabel = "OPEN";
        badgeClass = "badge badge-primary";
        break;
      case "ORDERED":
        badgeLabel = "ORDERED";
        badgeClass = "badge badge-warning";
        break;
      case "RECEIVED":
        badgeLabel = "RECEIVED";
        badgeClass = "badge badge-success";
        break;
      case "DONE":
        badgeLabel = "DONE";
        badgeClass = "badge badge-danger";
        break;
      case "REJECTED":
        badgeLabel = "REJECTED";
        badgeClass = "badge badge-dark";
        break;
      case "BO":
        badgeLabel = "BO";
        badgeClass = "badge badge-light";
        break;
      case "ARCHIVED":
        badgeLabel = "ARCHIVED";
        badgeClass = "badge badge-secondary";
        break;
    }

    return <span className={badgeClass}>{badgeLabel}</span>;
  };
  render() {
    return <div>{this.renderBadge()}</div>;
  }
}

export default StatusButton;
