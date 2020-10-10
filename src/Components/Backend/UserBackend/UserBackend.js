import { Container, Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import UserEventList from './UserEventList';

const UserBackend = () => {
    //LoggedIn User State
    const [loggedInUser] = useContext(UserContext);
    const [listedEvents, setListedEvents] = useState([]);

    const fetchEventData = () => {
        fetch('https://volunteer-network-ia2020.herokuapp.com/registered-events?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setListedEvents(data))
    }
    

    useEffect(() => {
        fetchEventData();
    }, [])

    //Handling Deleting Events
    const handleCancelEvent = (id) => {
        
        fetch(`https://volunteer-network-ia2020.herokuapp.com/delete-user-event-registration/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
            // console.log('deleted1')
        })
        alert('Registration Cancelled Successfully ! ');
        fetchEventData();
    }
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
            {listedEvents.map(events => (
                <UserEventList events={events} key={events._id} handleCancelEvent={handleCancelEvent}></UserEventList>
            ))}
            </Grid>
        </Container>

    );
};

export default UserBackend;