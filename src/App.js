import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";
import Authorized from "./Components/Authorized/Authorized";
import Unauthorized from "./Components/Unauthorized/Unauthorized";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.title = "Project - Order";
    if (localStorage.getItem("user")) setUser(localStorage.getItem("user"));
  }, []);

  const handlePostAuth = (resp) => {
    if (resp.error) {
      alert(resp.error);
    } else {
      setUser(resp.client.username);
      if (resp.client) localStorage.setItem("user", resp.client.username);
    }
  };

  const logOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="app">
      <Router>
        <Switch>
          {user ? (
            <Authorized
              user={user}
              logOut={logOut}
              handlePostAuth={handlePostAuth}
            />
          ) : (
            <Unauthorized handlePostAuth={ handlePostAuth } />
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
