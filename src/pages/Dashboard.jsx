import React from "react";

const Dashboard = () => {
  return (
    <React.Fragment>
      <h5 className="title-h">Dashboard</h5>

      <div className="grid-box">
        <div className="first">
          <div class="card">
            <div class="card-body">
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
                className="card-title"
              >
                <div>
                  <h5>Order No</h5>
                </div>
                <div style={{ float: "right", right: "0px", top: "0px" }}></div>
              </div>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="second">
          <div class="card">
            <div class="card-body">
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
                className="card-title"
              >
                <div>
                  <h5>My Order Book</h5>
                </div>
                <div style={{ float: "right", right: "0px", top: "0px" }}>
                  BTC ETH USDT
                </div>
              </div>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="third">
          <div class="card">
            <div class="card-body">
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
                className="card-title"
              >
                <div>
                  <h5>Ads Quantity</h5>
                </div>
                <div style={{ float: "right", right: "0px", top: "0px" }}>
                  
                </div>
              </div>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="fourth mt-2">
          <div class="card">
            <div class="card-body">
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
                className="card-title"
              >
                <div>
                  <h5>My Assets</h5>
                  <input type="checkbox" /> Only view assets that P2P supports
                </div>
                <div style={{ float: "right", right: "0px", top: "0px" }}>
                  <button className="btn btn-warning">Transfer</button>
                </div>
              </div>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
