import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Activate from './auth/Activate';
import AdminRoute from './auth/AdminRoute';
import Forgot from './auth/Forgot';
import PrivateRoute from './auth/PrivateRoute';
import Reset from './auth/Reset';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import Admin from './core/Admin';
import Private from './core/Private';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/auth/activate/:token" exact component={Activate} />
                <PrivateRoute path="/private" exact component={Private} />
                <AdminRoute path="/admin" exact component={Admin} />
                <Route path="/auth/password/forgot" exact component={Forgot} />
                <Route path="/auth/password/reset/:token" exact component={Reset} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
