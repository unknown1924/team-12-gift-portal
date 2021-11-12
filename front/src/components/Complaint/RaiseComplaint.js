import React, { Component } from "react";

class RaiseComplaint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderId: "",
      complain: "",
    };
  }

  handleOrderIdChange = (event) => {
    this.setState({
      orderId: event.target.value,
    });
  };

  handleComplainChange = (event) => {
    this.setState({
      complain: event.target.value,
    });
  };

  handleSubmit = () => {
    alert(`${this.state.orderId} ${this.state.complain}`);
  };

  render() {
    return (
      <div id="rc">
        <div className="container" style={{ padding: "14px" }}>
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">Order Id : </label>
              <input
                type="text"
                class="form-control"
                value={this.state.orderId}
                onChange={this.handleorderIdChange}
              />
              {/* <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small> */}
            </div>
            <div class="form-group">
              <label>Enter Complaint: </label>
              <textarea
                class="form-control"
                value={this.state.complain}
                onChange={this.handleComplainChange}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>

            {/* <div class="form-group">
                <h2 styles="text-align:center;">We are here to assist you!</h2>
                <br/>
                <h4>Please fill the form below for your complaints.</h4>
                <br/><br/>
                    <label>
                    Order Id:
                    <input 
                    type="text" 
                    placeholder="Enter Order Id"
                    value={this.state.orderId} 
                    onChange= {this.handleorderIdChange}/>
                    </label>
                </div>
                <br/>
                <div className="form-group">
                    <label>Complain:</label>
                    <textarea 
                    placeholder="Enter Complaint"
                    value={this.state.complain} 
                    onChange= {this.handleComplainChange}></textarea>
                </div>
                <br/>
                <button type="button" class="btn btn-success btn-lg">Submit</button> */}
          </form>
        </div>
      </div>
    );
  }
}

export default RaiseComplaint;
