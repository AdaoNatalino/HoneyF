import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Authorized from "./Components/Authorized/Authorized";
import Unauthorized from "./Components/Unauthorized/Unauthorized";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.title = "Winterflood Project";
    if (localStorage.getItem("user")) setUser(localStorage.getItem("user"));
  }, []);

  const handlePostAuth = (resp) => {
    if (resp.error) {
      alert(resp.error);
    } else {
      if (resp.client) {
        setUser(resp.client.username);
        localStorage.setItem("user", resp.client.username);
      }
    }
  };

  const logOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <UserContext.Provider value={
      {
        userInfo: user,
        handlePostAuth,
        logOut,
      }
    }
    >
      <Router>
        <Switch>{user ? <Authorized /> : <Unauthorized />}</Switch>
      </Router>
    </UserContext.Provider>
  );
}
export default App;
