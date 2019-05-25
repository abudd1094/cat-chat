import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

const Navbar = () => {
  const onLogout = e => {
    e.preventDefault();
    logout();
  }
  
  const authLinks = (
    <a onClick={onLogout} href="!#" className="nav-link">Logout</a>
  );

  const guestLinks = (
    <Link to="/login" className="nav-link">Login</Link>
  );
  
  return ( // JSX below says if we are not loading, look at isAuthenticated and returns a set of links
    <nav className="navbar">
      {/* { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>) }  */}
      {guestLinks}
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
}); 

export default connect(mapStateToProps, { logout })(Navbar);