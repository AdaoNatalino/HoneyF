const URL = `https://localhost:44351/api/`

const getToken = () => localStorage.getItem("jwt");

const validateToken = () => {
  return fetch(URL + "validate", {
      headers: {
          Authorization: `Bearer ${ getToken() }`,
      }
  })
  .then(res => res.json())
}

const createNewUser = (userData) => {
    return fetch(URL + "clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify( userData ),
      })
        .then((res) => res.json())
        .then((res) => {
            // console.log(res.client);
          localStorage.setItem("user", res.client.username);
          return res;
        })
}

const logInUser = (userData) => {
  return fetch(URL + `clients/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(userData ),
    })
      .then((res) => res.json())
      .then((res) => {
          console.log(res)
        localStorage.setItem("jwt", res.jwt);
        return res;
      })
}

const createNewItem = (itemData) => {
  return fetch(URL + "items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify( itemData ),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
}

const configObject = (request, key = "", data = "") => {
  const obj = {
    method: request,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ [key]: data }),
  }
  return obj
}

const requestNewTrade = (tradeData) => {
  const obj = configObject("POST", "trade", tradeData)
  return fetch(URL + "trades", obj)
  .then((res) => res.json())
  .then((res) => {
    return res;
  })
}

const getMyTrades = (id) => {
  return fetch(URL + "trades/" + id)
  .then(resp => resp.json())
  .catch(error => console.log(error))
}

const getMyItems = (id) => {
  return fetch(URL + "myItems/" + id)
  .then(resp => resp.json())
  .catch(error => console.log(error))
}


export default { 
  createNewUser, logInUser, validateToken, getMyItems,
  createNewItem, requestNewTrade, getMyTrades,
  
}  