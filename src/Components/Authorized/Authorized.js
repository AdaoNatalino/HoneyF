import React from 'react'
import { Switch, Route } from "react-router-dom";

// import NotFound404 from "../NotFound404"
import Home from "../HomeTheme/Home"
import AuthMenu from "./AuthMenu"
import NewItemForm from "./NewItemForm"
import DashBoard from "./Dashboard"
// import AppFooter from '../AppFooter';

export default function Authorized ({ logOut, user, orders }) {

    return (
        <>
            <AuthMenu
            user={user} 
            logOut={logOut}
            />
            <Switch>
                <Route exact path="/">
                    <Home
                    user={user}
                    />
                    {/* <AppFooter/> */}
                </Route>
                <Route exact path="/newItem">
                    <NewItemForm
                    user={user}
                    />
                </Route>
                <Route exact path="/profile">
                    <DashBoard
                        orders={orders}
                        logOut={logOut}
                        userInfo={user}
                        />
                </Route>
              
               
                {/* <Route path="*">
                    <NotFound404 />
                </Route> */}
               
            </Switch>  
        </>      
    )
    
}
