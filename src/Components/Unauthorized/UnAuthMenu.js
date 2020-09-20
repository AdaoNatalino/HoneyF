import React from 'react'
import { Switch, Route } from "react-router-dom";
import UnAuthMenu from './UnauthorizedMenu'
import Home from "../HomeTheme/Home"


export default function Unauthorized() {
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
            </Switch>
        </div>
    )
}
