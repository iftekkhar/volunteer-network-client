import { Container, Grid } from '@material-ui/core';
import './Header.css';
import Logo from '../../Images/logo.png';
import React from 'react';
import Navigation from './Navigation/Navigation';
import { Link, useLocation } from "react-router-dom";
import NavButtons from './Navigation/NavButtons';



const Header = () => {
    const location = useLocation();
    return (
        <>
            {

                (location.pathname === '/') || (location.pathname === '/dashboard/user') ?
                    <div className="header-home" >
                        <Container maxWidth="lg" >
                            <Grid container spacing={2} className="header-area">
                                <Grid item sm={3} xs={12}>
                                    <Link to="/">
                                        <img src={Logo} alt="Volunteer Network" width="80%"></img>
                                    </Link>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Navigation></Navigation>
                                </Grid>
                                <Grid item sm={3} xs={12}>
                                    <NavButtons></NavButtons>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                    :
                    <div className="header">
                        <Container maxWidth="lg" >
                            <Grid container spacing={2} >
                                <Grid item sm={12} xs={12} className="center">
                                    <Link to="/">
                                        <img src={Logo} alt="Volunteer Network" width="20%"></img>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
            }
        </>
    );
};

export default Header;