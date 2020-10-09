const URL = `https://localhost:5001/api/`;

const createNewUser = (userData) => {
  return fetch(URL + "clients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .then((res) => {
      localStorage.setItem("user", res.client.username);
      return res;
    });
};

const logInUser = (userData) => {
  return fetch(URL + `clients/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .then((res) => {
      // console.log(res);
      localStorage.setItem("jwt", res.jwt);
      return res;
    });
};

const processNewOrders = (itemData, user) => {
  console.log(itemData, user);
  return fetch(URL + `orders/multiple?username=${user}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(itemData),
  })
    .then((res) => res.json())
    .then((res) => {
      // console.log(res);
      return res;
    });
};

// const getMyOrders = (userInfo) => {
//   return fetch(URL + `orders?username=${userInfo}`)
//     .then((resp) => resp.json())
//     .catch((error) => console.log(error));
// };

const getMyOrders = async (userInfo) => {
  try {
    const resp = await fetch(URL + `orders?username=${userInfo}`);
    const respParsed = await resp.json();
    return respParsed;
  } catch (err) {
    console.log(err);
  }
};

export default { createNewUser, logInUser, getMyOrders, processNewOrders };
