import React from "react";

import { Tabs, Tab } from "react-bootstrap";


const FundingWallet = () => {
  return (
    <React.Fragment>
      <h5 className="title-h">Funding Wallet</h5>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          Home
        </Tab>
        <Tab eventKey="menu1" title="Menu1">
          Menu1
        </Tab>
        <Tab eventKey="menu2" title="Menu2">
          Menu2
        </Tab>
      </Tabs>
    </React.Fragment>
  );
};

export default FundingWallet;
