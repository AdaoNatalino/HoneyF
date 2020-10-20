import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Authorized from "./Components/Authorized/Authorized";
import Unauthorized from "./Components/Unauthorized/Unauthorized";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.title = "Honeywell UK";
    if (localStorage.getItem("honeyUser")) setUser(localStorage.getItem("honeyUser"));
  }, []);

  const handlePostAuth = (resp) => {
    if (resp.user) {      
      setUser(resp.userToken.username);
      localStorage.setItem("honey", resp.accessToken);
      localStorage.setItem("honeyUser", resp.userToken.username);
      return;
    }
    if (resp.errors) alert(resp.errors);
  };

  const logOut = () => {
    localStorage.removeItem("honeyUser");
    setUser(null);
  };

  const properties = {
    userInfo: user,
    handlePostAuth,
    logOut,
  };
  return (
    <UserContext.Provider value={properties}>
      <Router>
        <Switch>{user ? <Authorized /> : <Unauthorized />}</Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
