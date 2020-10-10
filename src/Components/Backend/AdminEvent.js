import { IconButton, TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const AdminEvent = ({listedVolunteer,handleDelete}) => {

    return (
        <TableRow key={listedVolunteer._id}>
              <TableCell component="th" scope="row">
                {listedVolunteer.name}
              </TableCell>
              <TableCell align="left">{listedVolunteer.email}</TableCell>
              <TableCell align="left">{new Date(listedVolunteer.eventDate).toDateString("dd/mm/yyy")}</TableCell>
              <TableCell align="left">{listedVolunteer.eventTitle}</TableCell>
        <TableCell align="left"><IconButton aria-label="delete" color="secondary" onClick={() => handleDelete(listedVolunteer._id)}>
        <DeleteIcon />
      </IconButton></TableCell>
            </TableRow>
    );
};

export default AdminEvent;