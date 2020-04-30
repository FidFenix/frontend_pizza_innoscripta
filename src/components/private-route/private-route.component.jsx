import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRouteHoC = ({ component: Component, ...rest })=> (
    <Route {...rest} render={(props) => (
        props.currentUser?
          <Component {...props} />
          :
          <Redirect to='/signin' />
      )} />
);

export default PrivateRouteHoC;