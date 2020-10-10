import 'date-fns';
import { Container, Grid, Paper, TextField, Button} from "@material-ui/core";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import React, { useState } from 'react';
import AdminNav from './AdminNav';
import './AdminBackend.css';
import { Link } from 'react-router-dom';



const AdminBackend = () => {
    //LoggedIn User State
    //Event Date
    const [eventData, setEventData] = useState({
        eventDate: new Date(),
        eventTitle: '',
        eventDescription: '',
        eventBanner:''
    });
    const handleDateChange = (date) => {
        const newDate = { ...eventData }
        newDate.eventDate = date;
        setEventData(newDate);
    };
    const handleBannerChange = (e) => {
        const newBanner = { ...eventData }
        newBanner.eventBanner = e.target.value;
        setEventData(newBanner);
    };
    const handleTitleChange = (e) => {
        const newTitle = { ...eventData }
        newTitle.eventTitle = e.target.value;
        setEventData(newTitle);
    };
    const handleDescriptionChange = (e) => {
        const newDescription = { ...eventData }
        newDescription.eventDescription = e.target.value;
        setEventData(newDescription);
    };
    const handleAddNewEvent = () => {
        const newEvent = { ...eventData };
        fetch('https://volunteer-network-ia2020.herokuapp.com/add-event', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEvent)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('added')
            })
        setEventData(
            {
                eventDate: new Date(),
                eventTitle: '',
                eventDescription: '',
                eventBanner:''
            }
        )
        alert('Event Added')
    }
    return (
        <Container maxWidth="lg">
            <Grid container spacing={4} className="" >
                <Grid item xs={4} className="admin-nav-bar">
                <AdminNav></AdminNav>
                </Grid>
                <Grid item xs={8} className="">
                    
                    <Paper className="add-event-form">
                    <h2>Add New Event</h2>
                        <TextField id="standard-basic" label="Event Title" fullWidth margin="normal" onChange={handleTitleChange} Value={eventData.eventTitle} />
                        <TextField id="standard-basic" label="Event Banner URL" placeholder="http://server/image.jpg"fullWidth margin="normal" onChange={handleBannerChange} value={eventData.eventBanner} />
                        <TextField id="standard-basic" label="Description" fullWidth margin="normal" onChange={handleDescriptionChange} value={eventData.eventDescription} />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="flex-start">

                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Event date"
                                    format="MM/dd/yyyy"
                                    value={eventData.eventDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        <Link to="/">
                            <Button variant="contained" color="primary" className="button-orange" type="submit" onClick={handleAddNewEvent}>
                                Add Event
            </Button>

                        </Link>

                    </Paper>
                    <div>

                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AdminBackend;