import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

// Common Routes
import Inicial from '../pages/Inicial';
import Noticias from '../pages/Noticias';
import ShowNoticia from '../pages/Noticias/ShowNoticia';

// Protected
// import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Inicial} />
    <Route path="/noticias" exact component={Noticias} />
    <Route path="/noticias/:slug" component={ShowNoticia} />
    {/* <Route path="/signup" component={SignUp} /> */}
    {/* <Route path="/forgot-password" component={ForgotPassword} /> */}
    {/* <Route path="/reset-password" component={ResetPassword} /> */}

    {/* <Route path="/dashboard" component={Dashboard} isPrivate /> */}
    {/* <Route path="/profile" component={Profile} isPrivate /> */}
  </Switch>
);

export default Routes;
