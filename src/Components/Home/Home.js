import { Container, Grid, TextField, Typography } from '@material-ui/core';
import './Home.css';
import React, { useEffect, useState } from 'react';
import Events from './Events';
import SearchIcon from '@material-ui/icons/Search';

const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://volunteer-network-ia2020.herokuapp.com/all-events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (

        <Container maxWidth="lg">
            <Grid item xs={12}>
                <Grid container justify="center">
                    <Typography gutterBottom variant="h2" component="h2">
                        I Grow by Helping People In Need
            </Typography>
            
                </Grid>
            </Grid>
            <Grid container spacing={4} alignItems="center" justify="center">
                <Grid item xs={6} className="search-bar">
                    
                    <TextField id="input-with-icon-grid" fullWidth label="Search..." />
                    <SearchIcon />
                </Grid>
            </Grid>



            <Grid container spacing={2}>
                {events.map(event => (
                    <Events event={event} key={event._id}></Events>
                ))}
            </Grid>
        </Container>

    );
};

export default Home;