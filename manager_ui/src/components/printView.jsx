import React, { Component } from "react";
import PrintRequestForm from "./common/printRequestForm";

class PrintView extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <button
          className="btn btn-small btn-primary float-right no-print"
          onClick={this.props.handleExitPrint()}
        >
          Exit
        </button>
        <PrintRequestForm
          activeItems={this.props.activeItems}
        ></PrintRequestForm>
        {/* <table className="table table-bordered">
          <tbody>
            <tr>
              <PrintRequestForm
                activeItems={this.props.activeItems}
              ></PrintRequestForm>
            </tr>
          </tbody>
        </table> */}
      </div>
    );
  }
}

export default PrintView;
