import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

function UserContainer({ fetchUsers, users, loading, error }) {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return loading ? (
    <h2>Loading Users...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {users && users.map((user) => <p key={user.id}>{user.name}</p>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
    loading: state.userReducer.loading,
    error: state.userReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
