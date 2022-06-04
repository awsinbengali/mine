import React from 'react';

import { useNavigate } from 'react-router-dom';

import {Link} from 'react-router-dom';

const Menu = () => {

    const navigate = useNavigate();

    const logoutHandler = () =>{
        navigate("/");
        localStorage.removeItem("jwtToken");
    }

    return ( 
        <React.Fragment>
            <div>
            <div className='menu'>
                <div className='logo'>
                    MineX
                </div>
                {localStorage.getItem("jwtToken")==null && <div className='links-container'>
                <div className='links'>
                    <p>Already a Member?</p>
                    <Link to='/login'><button className="account-button btn btn-warning">Log In</button></Link>
                </div>
                <div className='links'>
                    <p>New in MineX? <br/>Please register with us to use our amazing features.</p>
                    <Link to='/registration'><button className="account-button">REGISTER</button></Link>
                </div>
                </div>}

                {localStorage.getItem("jwtToken")!=null && <div className='links-logged-container'>
                <div className='links abc'>
                    <Link className="link-menu" to='/dashboard'>Dashboard</Link>
                </div>
                <div className='links abc'>
                    <Link className="link-menu" to='/order'>Order</Link>
                </div>
                <div className='links abc'>
                    <Link className="link-menu" to='/advertisement'>Advertisement</Link>
                </div>
                <div className='links abc'>
                    <Link className="link-menu" to='/funding-wallet'>Funding Wallet</Link>
                </div>
                <div className='links logout-btn'>
                    <button onClick={logoutHandler} className="account-button">Logout</button>
                </div>
                </div>}
            </div>
            </div>
        </React.Fragment>
     );
}
 
export default Menu;