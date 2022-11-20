import React from 'react';
// import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/Customlink';
import './Headers.css';

const Header = () => {
    return (
        <div>
            <h1>welcome to my fancy website</h1>
            <nav>
                <CustomLink to="home">home</CustomLink>
                <CustomLink to="about">about</CustomLink>
                <CustomLink to="contact">contact</CustomLink>
                <CustomLink to="users">users</CustomLink>
                <CustomLink to="posts">Posts</CustomLink>
                <CustomLink to="countries">country</CustomLink>
            </nav>
        </div>
    );
};

export default Header;