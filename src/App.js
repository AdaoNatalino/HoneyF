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
    if (resp.userToken) {       
      setUser(resp.userToken.email);
      localStorage.setItem("honeyUser", resp.userToken.email);
      localStorage.setItem("honey", resp.accessToken);
      // debugger
      return;
    }
    if (resp.errors) alert(resp.errors);
  };

  const logOut = () => {
    localStorage.removeItem("honeyUser");
    localStorage.removeItem("honey");

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
