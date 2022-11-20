import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Userdetails = () => {
    const { userId } = useParams();
    const [user, setuser] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`
        // console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setuser(data))
    },)
    return (
        <div>
            <h1>Show all user details: {userId}</h1>
            <h4>Name: {user.name}</h4>
            <h4>username: {user.username}</h4>
            <h4>Website: {user.website}</h4>
            <h5>{user.address?.street}</h5>
        </div>
    );
};

export default Userdetails;