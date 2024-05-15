/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Users = ({show}) => {
    return (
        <div className={`${show === "users" ? "" : "hidden"}`}>
            <h1>Users</h1>
        </div>
    );
};

export default Users;