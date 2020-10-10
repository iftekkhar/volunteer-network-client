import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../../App';
import { Button } from '@material-ui/core';
const NavButtons = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <div className="header-button">
            {
                loggedInUser.email
                    ? <Link to="/dashboard/user"><nav className="nav-links">
                        <ul><li>{loggedInUser.name}</li></ul></nav></Link>
                    : <Link to="/authentication"> <Button variant="contained" color="primary">Login</Button></Link>
            }
            <Link to="/dashboard/admin/add-event">
                <Button variant="contained" className="black-button">Admin</Button>
            </Link>
        </div>
    );
};

export default NavButtons;