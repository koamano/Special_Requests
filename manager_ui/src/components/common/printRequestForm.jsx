import React, { Component } from "react";

class PrintRequestForm extends Component {
  state = {};

  renderForms = () => {
    let completeRows = parseInt(this.props.activeItems.length / 2);
    let singleRows = this.props.activeItems.length % 2;
    let singleRowIndex = completeRows * 2;
    let content = [];
    for (let i = 1; i <= completeRows; i++) {
      let firstData = (i - 1) * 2;
      let secondData = (i - 1) * 2 + 1;
      content.push(
        <div className="row">
          <div className="col">
            <form>
              <div className="form-row">
                <div className="col">
                  <select
                    value={this.props.activeItems[firstData].status}
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
                    value={this.props.activeItems[firstData].store}
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
                    value={this.props.activeItems[firstData].type}
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
                    value={this.props.activeItems[firstData].category}
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
                  <label for="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={this.props.activeItems[firstData].name}
                    onChange={this.handleChange}
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="name">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={this.props.activeItems[firstData].phone}
                    onChange={this.handleChange}
                    placeholder="Enter Phone"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="vendor">Vendor</label>
                  <input
                    type="text"
                    name="vendor"
                    value={this.props.activeItems[firstData].vendor}
                    onChange={this.handleChange}
                    placeholder="Enter Vendor"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="model">Model</label>
                  <input
                    type="text"
                    name="model"
                    value={this.props.activeItems[firstData].model}
                    onChange={this.handleChange}
                    placeholder="Enter Model"
                  />
                </div>
              </div>
              <div class="form-row">
                <div className="form-group col-md-4">
                  <label for="name">Size</label>
                  <input
                    type="text"
                    name="size"
                    value={this.props.activeItems[firstData].size}
                    onChange={this.handleChange}
                    placeholder="Enter Size"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="name">Color</label>
                  <input
                    type="text"
                    name="color"
                    value={this.props.activeItems[firstData].color}
                    onChange={this.handleChange}
                    placeholder="Enter Color"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="width">Width</label>
                  <input
                    type="text"
                    name="width"
                    value={this.props.activeItems[firstData].width}
                    onChange={this.handleChange}
                    placeholder="Enter Width"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label for="itemNumber">Item Number</label>
                  <input
                    type="text"
                    name="item_number"
                    value={this.props.activeItems[firstData].item_number}
                    onChange={this.handleChange}
                    placeholder="Enter Item Number"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="requestedBy">Requested By</label>
                  <input
                    type="text"
                    name="requested_by"
                    value={this.props.activeItems[firstData].requested_by}
                    onChange={this.handleChange}
                    placeholder="Enter Requested By"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="purchase_order">PO</label>
                <input
                  type="text"
                  name="purchase_order"
                  value={this.props.activeItems[firstData].purchase_order}
                  onChange={this.handleChange}
                  placeholder="Enter PO"
                />
              </div>
            </form>
          </div>

          <div className="col">
            <form>
              <div className="form-row">
                <div className="col">
                  <select
                    value={this.props.activeItems[secondData].status}
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
                    value={this.props.activeItems[secondData].store}
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
                    value={this.props.activeItems[secondData].type}
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
                    value={this.props.activeItems[secondData].category}
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
                  <label for="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={this.props.activeItems[secondData].name}
                    onChange={this.handleChange}
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="name">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={this.props.activeItems[secondData].phone}
                    onChange={this.handleChange}
                    placeholder="Enter Phone"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="vendor">Vendor</label>
                  <input
                    type="text"
                    name="vendor"
                    value={this.props.activeItems[secondData].vendor}
                    onChange={this.handleChange}
                    placeholder="Enter Vendor"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="model">Model</label>
                  <input
                    type="text"
                    name="model"
                    value={this.props.activeItems[secondData].model}
                    onChange={this.handleChange}
                    placeholder="Enter Model"
                  />
                </div>
              </div>
              <div class="form-row">
                <div className="form-group col-md-4">
                  <label for="name">Size</label>
                  <input
                    type="text"
                    name="size"
                    value={this.props.activeItems[secondData].size}
                    onChange={this.handleChange}
                    placeholder="Enter Size"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="name">Color</label>
                  <input
                    type="text"
                    name="color"
                    value={this.props.activeItems[secondData].color}
                    onChange={this.handleChange}
                    placeholder="Enter Color"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="width">Width</label>
                  <input
                    type="text"
                    name="width"
                    value={this.props.activeItems[secondData].width}
                    onChange={this.handleChange}
                    placeholder="Enter Width"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label for="itemNumber">Item Number</label>
                  <input
                    type="text"
                    name="item_number"
                    value={this.props.activeItems[secondData].item_number}
                    onChange={this.handleChange}
                    placeholder="Enter Item Number"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="requestedBy">Requested By</label>
                  <input
                    type="text"
                    name="requested_by"
                    value={this.props.activeItems[secondData].requested_by}
                    onChange={this.handleChange}
                    placeholder="Enter Requested By"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="purchase_order">PO</label>
                <input
                  type="text"
                  name="purchase_order"
                  value={this.props.activeItems[secondData].purchase_order}
                  onChange={this.handleChange}
                  placeholder="Enter PO"
                />
              </div>
            </form>
          </div>
        </div>
      );
    }

    if (singleRows == 1) {
      content.push(
        <div className="row">
          <div className=".col-sm-6">
            <form>
              <div className="form-row">
                <div className="col">
                  <select
                    value={this.props.activeItems[singleRowIndex].status}
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
                    value={this.props.activeItems[singleRowIndex].store}
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
                    value={this.props.activeItems[singleRowIndex].type}
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
                    value={this.props.activeItems[singleRowIndex].category}
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
                  <label for="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={this.props.activeItems[singleRowIndex].name}
                    onChange={this.handleChange}
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="name">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={this.props.activeItems[singleRowIndex].phone}
                    onChange={this.handleChange}
                    placeholder="Enter Phone"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="vendor">Vendor</label>
                  <input
                    type="text"
                    name="vendor"
                    value={this.props.activeItems[singleRowIndex].vendor}
                    onChange={this.handleChange}
                    placeholder="Enter Vendor"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="model">Model</label>
                  <input
                    type="text"
                    name="model"
                    value={this.props.activeItems[singleRowIndex].model}
                    onChange={this.handleChange}
                    placeholder="Enter Model"
                  />
                </div>
              </div>
              <div class="form-row">
                <div className="form-group col-md-4">
                  <label for="name">Size</label>
                  <input
                    type="text"
                    name="size"
                    value={this.props.activeItems[singleRowIndex].size}
                    onChange={this.handleChange}
                    placeholder="Enter Size"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="name">Color</label>
                  <input
                    type="text"
                    name="color"
                    value={this.props.activeItems[singleRowIndex].color}
                    onChange={this.handleChange}
                    placeholder="Enter Color"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="width">Width</label>
                  <input
                    type="text"
                    name="width"
                    value={this.props.activeItems[singleRowIndex].width}
                    onChange={this.handleChange}
                    placeholder="Enter Width"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label for="itemNumber">Item Number</label>
                  <input
                    type="text"
                    name="item_number"
                    value={this.props.activeItems[singleRowIndex].item_number}
                    onChange={this.handleChange}
                    placeholder="Enter Item Number"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="requestedBy">Requested By</label>
                  <input
                    type="text"
                    name="requested_by"
                    value={this.props.activeItems[singleRowIndex].requested_by}
                    onChange={this.handleChange}
                    placeholder="Enter Requested By"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="purchase_order">PO</label>
                <input
                  type="text"
                  name="purchase_order"
                  value={this.props.activeItems[singleRowIndex].purchase_order}
                  onChange={this.handleChange}
                  placeholder="Enter PO"
                />
              </div>
            </form>
          </div>
        </div>
      );
    }
    return <div>{content}</div>;
  };

  // renderForms = () => {
  //   return this.props.activeItems.map(item => (
  //     <td className="col-sm-6">
  //       <form>
  //         <div className="form-row">
  //           <div className="col">
  //             <select
  //               value={item.status}
  //               name="status"
  //               onChange={this.handleChange}
  //             >
  //               <option value="" disabled selected>
  //                 STATUS
  //               </option>
  //               <option value="open">Open</option>
  //               <option value="ordered">Ordered</option>
  //               <option value="received">Received</option>
  //               <option value="done">Done</option>
  //               <option value="rejected">Rejected</option>
  //               <option value="bo">BO</option>
  //               <option value="archived">Archived</option>
  //             </select>
  //           </div>
  //           <div className="col">
  //             <select
  //               value={item.store}
  //               name="store"
  //               onChange={this.handleChange}
  //             >
  //               <option value="" disabled selected>
  //                 STORE LOCATION
  //               </option>
  //               <option value="college">College</option>
  //               <option value="solano">Solano</option>
  //             </select>
  //           </div>
  //           <div className="col">
  //             <select
  //               value={item.type}
  //               name="type"
  //               onChange={this.handleChange}
  //             >
  //               <option value="" disabled selected>
  //                 TYPE
  //               </option>
  //               <option value="Order">Order</option>
  //               <option value="Transfer">Transfer</option>
  //             </select>
  //           </div>
  //           <div className="col">
  //             <select
  //               value={item.category}
  //               name="category"
  //               onChange={this.handleChange}
  //             >
  //               <option value="" disabled selected>
  //                 CATEGORY
  //               </option>
  //               <option value="Footwear">Footwear</option>
  //               <option value="Non-Footwear">Non-Footwear</option>
  //             </select>
  //           </div>
  //         </div>
  //         <div className="form-row">
  //           <div className="form-group col-md-6">
  //             <label for="name">Name</label>
  //             <input
  //               type="text"
  //               name="name"
  //               value={item.name}
  //               onChange={this.handleChange}
  //               placeholder="Enter Name"
  //             />
  //           </div>
  //           <div className="form-group col-md-6">
  //             <label for="name">Phone</label>
  //             <input
  //               type="text"
  //               name="phone"
  //               value={item.phone}
  //               onChange={this.handleChange}
  //               placeholder="Enter Phone"
  //             />
  //           </div>
  //         </div>
  //         <div className="form-row">
  //           <div className="form-group col-md-6">
  //             <label for="vendor">Vendor</label>
  //             <input
  //               type="text"
  //               name="vendor"
  //               value={item.vendor}
  //               onChange={this.handleChange}
  //               placeholder="Enter Vendor"
  //             />
  //           </div>
  //           <div className="form-group col-md-6">
  //             <label for="model">Model</label>
  //             <input
  //               type="text"
  //               name="model"
  //               value={item.model}
  //               onChange={this.handleChange}
  //               placeholder="Enter Model"
  //             />
  //           </div>
  //         </div>
  //         <div class="form-row">
  //           <div className="form-group col-md-4">
  //             <label for="name">Size</label>
  //             <input
  //               type="text"
  //               name="size"
  //               value={item.size}
  //               onChange={this.handleChange}
  //               placeholder="Enter Size"
  //             />
  //           </div>
  //           <div className="form-group col-md-4">
  //             <label for="name">Color</label>
  //             <input
  //               type="text"
  //               name="color"
  //               value={item.color}
  //               onChange={this.handleChange}
  //               placeholder="Enter Color"
  //             />
  //           </div>
  //           <div className="form-group col-md-4">
  //             <label for="width">Width</label>
  //             <input
  //               type="text"
  //               name="width"
  //               value={item.width}
  //               onChange={this.handleChange}
  //               placeholder="Enter Width"
  //             />
  //           </div>
  //         </div>
  //         <div className="form-row">
  //           <div className="form-group col-md-4">
  //             <label for="itemNumber">Item Number</label>
  //             <input
  //               type="text"
  //               name="item_number"
  //               value={item.item_number}
  //               onChange={this.handleChange}
  //               placeholder="Enter Item Number"
  //             />
  //           </div>
  //           <div className="form-group col-md-4">
  //             <label for="requestedBy">Requested By</label>
  //             <input
  //               type="text"
  //               name="requested_by"
  //               value={item.requested_by}
  //               onChange={this.handleChange}
  //               placeholder="Enter Requested By"
  //             />
  //           </div>
  //         </div>
  //         <div className="form-group">
  //           <label for="purchase_order">PO</label>
  //           <input
  //             type="text"
  //             name="purchase_order"
  //             value={item.purchase_order}
  //             onChange={this.handleChange}
  //             placeholder="Enter PO"
  //           />
  //         </div>
  //       </form>
  //     </td>
  //   ));
  // };

  render() {
    return <div>{this.renderForms()}</div>;
  }
}

export default PrintRequestForm;
