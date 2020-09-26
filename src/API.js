const URL = `https://localhost:5001/api/`

const getToken = () => localStorage.getItem("user");

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

const processNewOrders = (itemData, user) => {
  console.log(itemData, user)
  return fetch(URL + `orders/multiple?username=${user}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify( itemData ),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      return res;
    })
}


const getMyOrders = (userInfo) => {
  return fetch(URL + `orders?username=${userInfo}`)
  .then(resp => resp.json())
  // .then(r => console.log(r))
  .catch(error => console.log(error))
}


export default { 
  createNewUser, logInUser, getMyOrders,
  processNewOrders, 
  
}  