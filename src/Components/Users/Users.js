import React, { useState } from 'react';
import User from '../User/User';

const Users = () => {
    const [users, setUsers] = useState([]);
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    return (
        <div>
            <h3>All users</h3>
            {
                users.map(user => <User
                key={user.id}
                user = {user}
                ></User>)
            }
        </div>
    );
};

export default Users;