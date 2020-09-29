import React from 'react'
import { Switch, Route } from "react-router-dom";
import UnAuthMenu from './UnauthorizedMenu'
import Home from "../HomeTheme/Home"
import SignIn from './SignIn'
import SignUp from './SignUp'


export default function Unauthorized( ) {
    return (
        <div>
            <UnAuthMenu/>
            <Switch>
                <Route exact path="/">
                    <Home
                  
                    />
                </Route>
                <Route exact path="/login">
                    <SignIn
                    />
                </Route>
                <Route exact path="/signup">
                    <SignUp
                    />
                </Route>
            </Switch>
        </div>
    )
}
