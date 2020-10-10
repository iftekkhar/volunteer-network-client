import 'date-fns';
import { Container, Grid, Paper, TextField, Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from 'react';
import './VolunteerRegistration.css';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../../App";

const VolunteerRegistration = () => {
    const { eventID } = useParams();
    const [eventReg, setEventReg] = useState([]);
    useEffect(() => {
        fetch('https://volunteer-network-ia2020.herokuapp.com/all-events')
            .then(res => res.json())
            .then(data => data.find(e => e._id === eventID))
            .then(data => setEventReg(data))
    }, [])
    //Removing & reassigning ID from the Events Collections
    const newEventDetails = { ...eventReg }
    delete newEventDetails._id;
    newEventDetails.eventId = eventReg._id;

    //LoggedIn User State
    const [loggedInUser] = useContext(UserContext);
    //Registration Date Change State
    const [newVolunteerRegistration, setNewVolunteerRegistration] = useState({
        registrationDate: new Date(),
        volunteerDescription: ''
    });
    // Registration Date Change
    const handleDateChange = (date) => {
        const newDate = { ...newVolunteerRegistration }
        newDate.registrationDate = date;
        setNewVolunteerRegistration(newDate);
    };
    // Volunteer Registration Description
    const handleDescriptionChange = (e) => {
        const newDescription = { ...newVolunteerRegistration }
        newDescription.volunteerDescription = e.target.value;
        setNewVolunteerRegistration(newDescription);
    };
    // Handle Submit Button
    const handleRegisterNewVolunteer = () => {
        const newVolunteer = { ...newVolunteerRegistration, ...newEventDetails, ...loggedInUser, };
        fetch('https://volunteer-network-ia2020.herokuapp.com/register-volunteer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newVolunteer)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('added')
            })
        //FeedBack
        alert('Registration Done')
    }
    return (
        <Container maxWidth="sm">
            <Grid container spacing={0} className="volunteer-registration-section" alignItems="center">
                <Grid item xs={12} className="pd-20">
                    <Paper className="volunteer-registration-form">
                        <h2>Register As a Volunteer</h2>
                        <TextField id="outlined-basic-destination" label="Name"  fullWidth margin="normal" value={loggedInUser.name} />
                        <TextField id="outlined-basic-destination" label="Email Address"  fullWidth margin="normal" value={loggedInUser.email} />
                        <TextField id="outlined-basic-destination" label="Description"  fullWidth margin="normal" value={newVolunteerRegistration.volunteerDescription} onChange={handleDescriptionChange} />
                        
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="flex-start">
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Event date"
                                        format="MM/dd/yyyy"
                                        value={newVolunteerRegistration.registrationDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                        </MuiPickersUtilsProvider>
                        
                        <TextField id="outlined-basic-destination" label="Event Title" fullWidth margin="normal" value={newEventDetails.eventTitle} />

                        <Link to="/dashboard/user">
                            <Button variant="contained" color="primary" fullWidth onClick={handleRegisterNewVolunteer}>
                             Register Now
                            </Button>
                        </Link>
                        
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default VolunteerRegistration;