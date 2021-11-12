import React, { Component } from "react";

class SendGift extends Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["name"] = "";
      input["email"] = "";
      input["phone"] = "";
      input["address"] = "";
      this.setState({ input: input });

      alert("Demo Form is submited");
    }
  }
  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["phone"]) {
      isValid = false;
      errors["phone"] = "Please enter your phone number.";
    }

    if (typeof input["phone"] !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(input["phone"])) {
        isValid = false;
        errors["phone"] = "Please enter only number.";
      } else if (input["phone"].length !== 10) {
        isValid = false;
        errors["phone"] = "Please enter valid phone number.";
      }
    }

    if (!input["address"]) {
      isValid = false;
      errors["address"] = "Please enter your address.";
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <div id="sgift" style={{ padding: "14px" }}>
        <div className="container">
          <div class="row">
            <div class="col-sm">
              <aside>
                <img
                  className="img-fluid"
                  src="https://media.istockphoto.com/photos/hands-giving-gift-closeup-picture-id871610664?k=20&m=871610664&s=612x612&w=0&h=_c05JTnGp5ziXNKS0QbQ3bDkvbXcxQVk2JS_bM4Wckc="
                alt="img" />
              </aside>
            </div>
            <div class="col-sm">
              <div className="container">
                <h4>Enter details of gift recipient.</h4>
                <form onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <label for="name">Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={this.state.input.name}
                      onChange={this.handleChange}
                      class="form-control"
                      placeholder="Enter name"
                      id="name"
                    />

                    <div className="text-danger">{this.state.errors.name}</div>
                  </div>

                  <div class="form-group">
                    <label for="email">Email Address:</label>
                    <input
                      type="text"
                      name="email"
                      value={this.state.input.email}
                      onChange={this.handleChange}
                      class="form-control"
                      placeholder="Enter email"
                      id="email"
                    />

                    <div className="text-danger">{this.state.errors.email}</div>
                  </div>

                  <div class="form-group">
                    <label for="Phone">Phone:</label>
                    <input
                      type="text"
                      name="phone"
                      value={this.state.input.phone}
                      onChange={this.handleChange}
                      class="form-control"
                      placeholder="Enter phone"
                      id="phone"
                    />

                    <div className="text-danger">{this.state.errors.phone}</div>
                  </div>

                  <div class="form-group">
                    <label for="address">Address:</label>
                    <textarea
                      name="address"
                      value={this.state.input.address}
                      onChange={this.handleChange}
                      placeholder="Enter address"
                      class="form-control"
                    />

                    <div className="text-danger">
                      {this.state.errors.address}
                    </div>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Send Updates
                    </label>
                  </div>

                  <input type="submit" value="Submit" class="btn btn-danger" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SendGift;
