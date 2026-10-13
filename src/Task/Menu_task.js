import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <div className="navbar">
                <h2>My Portfolio</h2>

                <div className="menu">
                <Link to="/login">Login</Link>

                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/accordion">Accordion</Link>
                </div>
            </div>
        </>
    );
};

export default Menu;