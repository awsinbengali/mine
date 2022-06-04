import React from 'react';

import { Card } from 'react-bootstrap';

const NewAd = () => {
    return ( 
        <React.Fragment>
            <h5>New Add</h5>
            <div>
                <Card>
                    <h8>
                        Types & Coins
                    </h8>
                    <div className='card-format'>
                    <div>
                        <div><label>Select Ad Type</label></div> <div><button className='btn btn-success'>Buy</button><button className='btn btn-danger'>Sell</button></div>
                    </div>
                    <div>
                        <div><label>Select Asset Type</label></div>
                        <div>
                        <input type="radio" name='currency' />USDT
                        <input type="radio" name='currency' />BTC
                        <input type="radio" name='currency' />ETH
                        </div>
                    </div>
                    <div>
                        <div>
                        <label>Select Cash Currency</label>
                        </div>
                        <div>
                        <input type="radio" name='currency' />INR
                        <input type="radio" name='currency' />AED
                        <input type="radio" name='currency' />THB
                        </div>
                    </div>
                    </div>
                </Card>
            </div>
            <div>
                <Card>
                    <h8>
                        Types & Coins
                    </h8>
                    <div>
                        Select Ad Type <button>Buy</button><button>Sell</button>
                    </div>
                </Card>
            </div>
            <div>
                <Card>
                    <h8>
                        Types & Coins
                    </h8>
                    <div>
                        Select Ad Type <button>Buy</button><button>Sell</button>
                    </div>
                </Card>
            </div>
            <div>
                <Card>
                    <h8>
                        Types & Coins
                    </h8>
                    <div>
                        Select Ad Type <button>Buy</button><button>Sell</button>
                    </div>
                </Card>
            </div>
            <div>
                <Card>
                    <h8>
                        Types & Coins
                    </h8>
                    <div>
                        Select Ad Type <button>Buy</button><button>Sell</button>
                    </div>
                </Card>
            </div>
            <div>
                <Card>
                    <h8>
                        Types & Coins
                    </h8>
                    <div>
                        Select Ad Type <button>Buy</button><button>Sell</button>
                    </div>
                </Card>
            </div>
        </React.Fragment>
     );
}
 
export default NewAd;