import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Login from '../../pages/Login';
import Order from '../../pages/Order';
import Registration from '../../pages/Registration';
import FundingWallet from '../../pages/FundingWallet';
import Advertisement from '../../pages/Advertisement';
import NoMatch from '../utilities/NoMatch';
import NewAd from '../../pages/NewAd';

const Content = () => {
    return ( 
        <React.Fragment>
            <div className='content'>
                <Routes>
                    <Route path="login" element={<Login />}/>
                    <Route path="registration" element={<Registration />}/>
                    <Route path="dashboard" element={<Dashboard />}/>
                    <Route path="funding-wallet" element={<FundingWallet />}/>
                    <Route path="order" element={<Order />}/>
                    <Route path="advertisement" element={<Advertisement />}/>
                    <Route path="/new-ad" element={<NewAd />}/>
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </div>
        </React.Fragment>
     );
}
 
export default Content;