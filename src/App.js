import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";
import Authorized from "./Components/Authorized/Authorized";
import Unauthorized from "./Components/Unauthorized/Unauthorized";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    document.title = "Project - Order";
    if (localStorage.getItem("user")) setUser(localStorage.getItem("user"));
  }, []);

  const handlePostAuth = (resp) => {
    if (resp.error) {
      alert(resp.error);
    } else {
      setUser(resp.client.username);
      setOrders(resp.client.orders);
      if (resp.client) localStorage.setItem("user", resp.client.username);
    }
  };

  const logOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        userInfo: user,
        handlePostAuth: handlePostAuth,
        orders: orders,
        logOut: logOut,
      }}
    >
      <Router>
        <Switch>{user ? <Authorized /> : <Unauthorized />}</Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
