import { Container, Grid, Paper,Table,TableBody ,TableCell,TableContainer,TableHead,TablePagination,TableRow} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import AdminNav from './AdminNav';
import { makeStyles } from '@material-ui/core/styles';
import AdminEvent from './AdminEvent';

const useStyles = makeStyles({
    root: {
        width: '100%',
        padding:'20px'
    },
    container: {
      maxHeight: 440,
    },
  });

  const columns = [
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'email', label: 'Email', minWidth: 100 },
    {
      id: 'registration-date',
      label: 'Registration Date',
      minWidth: 100,
      align: 'left',
      
    },
    {
      id: 'volunteer-list',
      label: 'Volunteer List',
      minWidth: 100,
      align: 'left',
      
    },
    {
      id: 'action',
      label: 'Action',
      minWidth: 50,
      align: 'left',
      
    },
];
  

const AdminBackendRegistrationList = () => {
//Data Fetching
const [listedVolunteers, setListedVolunteers] = useState([]);
    
const fetchEventData = () => {
    fetch('https://volunteer-network-ia2020.herokuapp.com/lists-all-volunteers')
        .then(res => res.json())
        .then(data => setListedVolunteers(data))
}

    // console.log(listedVolunteers);
useEffect(() => {
    fetchEventData();
}, [])

//Handling Deleting Volunteer
const handleDelete = (id) => {
      
    fetch(`https://volunteer-network-ia2020.herokuapp.com/delete-user-event-registration/${id}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(result => {
      
    })
    alert('Deleted Successfully ! ');
    fetchEventData();
}




    const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
    return (
        <Container maxWidth="lg">
            <Grid container spacing={4} className="">
                <Grid item xs={4} className="admin-nav-bar">
                <AdminNav></AdminNav>
                </Grid>
                <Grid item xs={8} className="">
                <Paper className={classes.root}>
                    <h2>Volunteer Registration List</h2>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {listedVolunteers.map(listedVolunteer => (
                <AdminEvent listedVolunteer={listedVolunteer} handleDelete={handleDelete} ></AdminEvent>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={listedVolunteers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
                    <div>

                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AdminBackendRegistrationList;