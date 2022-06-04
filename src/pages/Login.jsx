import React, { useState } from "react";

import {useNavigate} from 'react-router-dom';

import axios from 'axios';

const Login = () => {

    const navigate = useNavigate();

    const [account, setAccount] = useState({ username:'', password:''});

    const onChangeHandler = (event) =>{      
        setAccount({...account,[event.target.id]:event.target.value});
        console.log(account)
    }

    const login = (e) =>{
      e.preventDefault();


      axios.post("http://localhost:5000/minex/login",
      {
        username: account.username,
        password: account.password
      }).then(
        res=>
        {
          localStorage.setItem('jwtToken',res.data);
          navigate("/dashboard")
      }
      ).catch(err=>{
        console.log(err)
      })
    }

  return (
    <React.Fragment>
      <h5 className="title-h">
        Login
      </h5>
      <div className="center login">
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter Username"
              onChange={onChangeHandler}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              onChange={onChangeHandler}
            />
          </div>
          <button type="submit" className="btn btn-warning" onClick={login}>
            LOGIN
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
