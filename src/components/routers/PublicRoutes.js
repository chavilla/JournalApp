import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoutes = ({ isLoggedIn, component: Component, ...rest }) => {


    return (
        <Route 
            { ...rest }
            component={
                (props)=>(
                    isLoggedIn 
                    ?
                    <Redirect to='/journal' />
                    :
                    <Component {...props} />
                )
            }
        />
    )
}

PublicRoutes.propTypes={
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PublicRoutes