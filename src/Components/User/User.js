import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const User = (props) => {
    const { id,name, username, email } = props.user;
    const navigate = useNavigate()
    const showdetails = () => {
       const path =`/user/${id}` 
       navigate(path)
    //    navigate(`/user/${id}`)
    }
    
    return (
        <div>
            <h3>single user{name}</h3>
            
            <h5>{email}</h5>
            <button onClick={showdetails}>{username} Id:{id}</button>
            {/* <button onClick={showdetails}>show detail</button> */}
            <Link to={`/user/${id}`}>show detail</Link>
        </div>
    );
};

export default User;