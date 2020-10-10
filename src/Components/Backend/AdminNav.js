import React from 'react';
import { Link } from 'react-router-dom';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
const AdminNav = () => {
    return (
        <nav className="side-nav-links">
            <ul>
                <Link to="/dashboard/admin/add-event">
                    <li><PeopleAltIcon color="primary"/><p>Add Events</p>  </li>
                </Link>
                <Link to="/dashboard/admin/volunteer-registration-list">
                    <li><AddCircleOutlineIcon color="primary"/> <p>Volunteer Registration List</p></li>
                </Link>
            </ul>
        </nav>
    );
};

export default AdminNav;