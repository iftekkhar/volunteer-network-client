import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Headers/Header';
import Home from './Components/Home/Home';
import VolunteerRegistration from './Components/VolunteerRegistration/VolunteerRegistration';
import Auth from './Components/LoginRegister/Auth';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AdminBackend from './Components/Backend/AdminBackend';
import NotFound from './Components/NotFound/NotFound';
import UserBackend from './Components/Backend/UserBackend/UserBackend';
import AdminBackendRegistrationList from './Components/Backend/AdminBackendRegistrationList';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/authentication" >
            <Auth />
          </Route>
          <PrivateRoute path="/volunteer-registration/:eventID">
            <VolunteerRegistration />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/user" >
            <UserBackend />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/admin/add-event" >
            <AdminBackend />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/admin/volunteer-registration-list" >
            <AdminBackendRegistrationList />
          </PrivateRoute>
          <Route path="*" >
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
