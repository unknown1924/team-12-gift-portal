import React from "react";

function User() {
  return (
    <>
      <div className="container">
        <div className="row">
          <form style={{ width: "90vw", padding: "20px" }}>
            <div className="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                autoComplete="off"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input
                type="name"
                className="form-control"
                autoComplete="off"
                id="exampleFormControlInput2"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">User Name</label>
              <input
                type="username"
                className="form-control"
                autoComplete="off"
                id="exampleFormControlInput3"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput1"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Address</label>
              <input
                type="address"
                className="form-control"
                id="exampleFormControlInput1"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Phone</label>
              <input
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
                autoComplete="off"
              />
            </div>
            <button className="btn btn-success"> Save Changes </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default User;
