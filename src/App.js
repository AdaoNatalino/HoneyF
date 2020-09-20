import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import './App.css';
import Authorized from './Components/Authorized/Authorized';
import Unauthorized from './Components/Unauthorized/UnAuthMenu';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    document.title = "Project - Order"
    if (localStorage.getItem('user'))
    setUser(localStorage.getItem('user'))
  },[])

  const logOut = () => {
    localStorage.removeItem("user");
    setUser(null)
  }

  return (
    <div className="app">
      <Router>
        <Switch>
          { user
          ? <Authorized/>
          : <Unauthorized/> }
        </Switch>
      </Router>
    </div>
  );
}

export default App;


