import { Paper , Grid, Button } from '@material-ui/core';
import React from 'react';

import './UserEventList.css';

const UserEventList = ({events,handleCancelEvent}) => {
    
    
    
    return (


                    
                    <Grid item sm={6} xs={12} className="event-cards">
        
                    <Paper elevation={0}>
                        <div className="user-event-lists">
                            <Grid className="event-image" sm={4} container >
                                <img src={events.eventBanner} alt={events.eventTitle} width="70%"></img>
                            </Grid>
                            <Grid sm={6} container className="event-details"> 
                                <h3 className="event-title">Event: <span>{events.eventTitle}</span> </h3>
                            <h4 className="event-date">Registration Date: <span>{new Date(events.eventDate).toDateString("dd/mm/yyy")}</span> </h4>
                            {/* <Link to='/'> */}
                                <Button variant="contained" color="primary" fullWidth onClick={() => handleCancelEvent(events._id)}>
                                    Cancel
                                </Button>
                                {/* </Link> */}
                            </Grid>
                        </div>
            </Paper>
                
            
                        </Grid>
           
    );
};

export default UserEventList;