import React, {Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';
import axios from 'axios';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({ 
    username: '',
    password: ''
  });
  
  const { username, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
    const user = await axios.get('http://5ce29cc3e3ced20014d35c09.mockapi.io/catchat/api/user', {
      params: {
        username: formData.username,
        password: formData.password
      }
    });

    if (user) {
      login(username, password)
      localStorage.setItem('username', username); // set the token in the state once logged in
    } else {
      return "User not found!"
    }
  }  

  // Redirect if logged in
  if(isAuthenticated) {
    return <Redirect to="/console" />;
  }

  return (
    <Fragment>
      <h1 className="">Sign In</h1>
      <form onSubmit={e => onSubmit(e)}>
        <div>
          <input 
            type="text" 
            placeholder="Username" 
            name="username" 
            value={username}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn" value="Login" />
      </form>
    </Fragment>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);