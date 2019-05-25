import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from '../actions/userList'


const UserList = ({userList, getUsers}) => {
  const [formData, setFormData] = useState({
    users: '',
    loading: 'true'
  });
  
  useEffect(() => {
    getUsers();

    setFormData({
      users: userList.users,
      loading: 'false'
    });
  }, []); 

  return (
    <div>
      <h4 className="ui center aligned header" style={{ margin:'5px' }}>Users</h4>
      {userList.loading === true ? 'loading...' : userList.users.map((user, index) => {
        return (
          <div key={index} className="username">
            <div>{user.username}</div>
          </div>
        )
      })}
    </div>
  )
}

UserList.propTypes = {
  getUsers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userList: state.userList
});

export default connect(mapStateToProps, { getUsers })(UserList);