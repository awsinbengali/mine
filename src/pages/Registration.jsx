import React, { Component } from "react";

const Registration = () => {
  return (
    <React.Fragment>
      <h5 className="title-h">Registration</h5>
      <div className="center registration">
        <form>
          <div className="form-group">
            <label for="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter first name"
            />
          </div>
          <div className="form-group">
            <label for="middleName">Middle Name</label>
            <input
              type="text"
              className="form-control"
              id="middleName"
              placeholder="Enter middle name"
            />
          </div>
          <div className="form-group">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter last name"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label for="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Enter address"
            />
          </div>
          <div className="form-group">
            <label for="contact">Contact</label>
            <input
              type="text"
              className="form-control"
              id="contact"
              placeholder="Enter contact number"
            />
          </div>
          <div classname="form-group">
            <label for="userName">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username"
            />
          </div>
          <div></div>
          <div></div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="cpnfirmPassword"
              placeholder="Confirm Password"
            />
          </div>

          <div className="registration-btn-container">
            <button type="submit" className="btn btn-warning register-btn">
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Registration;
