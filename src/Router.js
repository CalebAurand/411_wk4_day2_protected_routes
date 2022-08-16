import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import HomeContainer from './containers/HomeContainer';
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
    let cookieObj = cookie.parse(document.cookie)
    let cookieBool = cookieObj.loggedIn;

    if(cookieBool === "true"){
        return true;
    } else {
        return false;
    }

}

// Write ProtectedRoute function here
const ProtectedRoute = (props) => {
    const {component: Component, ...rest} = props;
    
        return(
            checkAuth() === true ?
            <Component {...rest} /> :
            <Navigate to="/login" />
        ) 
    
}

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<ProtectedRoute component={HomeContainer}/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/about" element={<ProtectedRoute component={About}/>} />
            <Route path="/car/:id" element={<ProtectedRoute component={Car} />} />
        </Routes>
    );
};

export default Router;