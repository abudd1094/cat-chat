import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

const Navbar = ({ auth: { isAuthenticated, payload }, logout }) => {
  const onLogout = e => {
    e.preventDefault();
    logout();
  }
  
  const logoutButton = (
    <a onClick={onLogout} href="!#" className="nav-link">Logout</a>
  );

  const loginButton = (
    <Link to="/login" className="nav-link">Login</Link>
  );

  const loggedInUser = (
    <div>Logged in as:  {payload}</div>
  )
  
  return ( // JSX below says if we are not loading, look at isAuthenticated and returns a set of links
    <nav className="navbar">
      <div className="navbar-l">
        { isAuthenticated ? loggedInUser : '' }
      </div>
      <div className="navbar-r">
        { isAuthenticated ? logoutButton : loginButton }
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
}); 

export default connect(mapStateToProps, { logout })(Navbar);