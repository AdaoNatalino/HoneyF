import React from 'react'
import { Switch, Route } from "react-router-dom";
import UnAuthMenu from './UnauthorizedMenu'
import Home from "../HomeTheme/Home"
import SignIn from './SignIn'
import SignUp from './SignUp'


export default function Unauthorized( { handlePostAuth } ) {
    return (
        <div>
            <UnAuthMenu/>
            <Switch>
                <Route exact path="/">
                    <Home
                    // user={user}
                    />
                    {/* <AppFooter/> */}
                </Route>
                <Route exact path="/login">
                    <SignIn
                    handlePostAuth={handlePostAuth}
                    />
                </Route>
                <Route exact path="/signup">
                    <SignUp
                    handlePostAuth={handlePostAuth}
                    />
                </Route>
            </Switch>
        </div>
    )
}
