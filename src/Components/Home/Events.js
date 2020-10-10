import React from 'react';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
const Events = (props) => {
    // console.log(props.event.eventTitle)

    return (
        <Grid item sm={3} xs={12} className="event-cards">
            <Grid>
               
                <Link to={"/volunteer-registration/" + props.event._id}>
                    <Card >
                        <CardActionArea>
                            <CardMedia
                                className="event-list-img"
                                image={props.event.eventBanner}
                                title="Foster a shelter Animal"
                            />
                            <CardContent className="event-list-title">
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.event.eventTitle}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </Grid>
        </Grid>
    );
};

export default Events;