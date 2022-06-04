import { Button, Modal, Card } from "react-bootstrap";

import React, { Component } from "react";

import { Link } from 'react-router-dom';

const Advertisement = () => {

  return (
    <React.Fragment>        
      <h5 className="title-h">Advertisement</h5>
      <div>
        <div style={{ float: "right", right: "0px", top: "0px" }}>
          <Link to='/new-ad'><Button className="btn btn-warning">Post New Ads</Button></Link>
        </div>
      </div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Advertisement;
