import React, { useEffect, useState } from "react";
import "../App.css";

import { Tabs, Tab, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from 'axios';

function Order() {

  const[orders, setOrders] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/binance/getListOrders')
    .then(res=>{
      setOrders(res.data.data)
      console.log(res.data.data)
    })
    .catch(err=>console.log(err))
  },[])

  return (
    <React.Fragment>
      <h5 className="title-h">Order</h5>

      <Tabs
        defaultActiveKey="order"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="order" title="Order">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Order No.</th>
                <th>Advertisement No.</th>
                <th>Amount</th>
                <th>Asset</th>
                <th>Trade Type</th>
                <th>Fiat</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index)=>{
                return <tr key={index}>
                <td>{order.orderNumber}</td>
                <td>{order.advNo}</td>
                <td>{order.amount}</td>
                <td>{order.asset}</td>
                <td>{order.tradeType}</td>
                <td>{order.fiat}({order.fiatSymbol})</td>
                <td>{order.totalPrice}</td>
              </tr>
              })}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="history" title="History">
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </React.Fragment>
  );
}

export default Order;
