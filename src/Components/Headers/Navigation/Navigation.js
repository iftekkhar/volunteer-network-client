import React, { useContext } from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";
import { UserContext } from '../../../App';
import { Button } from '@material-ui/core';

const Navigation = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <nav className="nav-links">
            <ul>
                <Link to="/">
                    <li>Home</li></Link>
                <Link to="/">
                    <li>Donate</li></Link>
                <Link to="/">
                    <li>Events</li></Link>
                <Link to="/">
                    <li>Blog</li></Link>
                {/* {
                    loggedInUser.email
                        ?<Link to="/dashboard/user"><li>{loggedInUser.name}</li></Link>
                        : <Link to="/authentication"> <li>Login</li></Link>
                }
                <Link to="/dashboard/admin/add-event">
                    <Button variant="contained" color="secondary">Admin</Button>
                </Link> */}
            </ul>
        </nav>
    );
};

export default Navigation;