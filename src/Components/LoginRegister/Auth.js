import { Container, Grid, Paper, Button } from '@material-ui/core';
import './Auth.css';
import GoogleIcon from '../../Images/google.png';
import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Auth = () => {

    //LoggedIn User State
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    //Forced Redirect
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    //Initialize Firebase
    const initFireBase = () => {
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
    }

    //Google Login
    const handleGoogleSignIn = () => {
        initFireBase();

        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then(function (result) {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email };
                setLoggedInUser(signedInUser);
                storeAuthToken();
                history.replace(from);
            })
            .catch(function (error) {


            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                // ...
            }).catch(function (error) {
                // Handle error
            });
    }

    return (
        <Container maxWidth="sm" className="full-height">
            <Grid container className="auth-section" spacing={0} alignItems="center"  >
                <Grid item xs={12} >
                    <Paper elevation={0} className="login-section">
                        <h3>Create an Account</h3>
                        <div className="social-login-section">
                            <Button
                                variant="outlined"
                                className="button-orange-outlined social-login"
                                onClick={handleGoogleSignIn}
                                startIcon={
                                    // <SvgIcon>
                                    <img src={GoogleIcon} alt="" width="36" height="36" />
                                    /* </SvgIcon> */
                                }
                            >
                                Continue with Google
              </Button>
                        </div>
                        <div className="create-account">
                            Don't have an Account ? <a href="#login" >Create an Account </a>
                        </div>
                    </Paper>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Auth;