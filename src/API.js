const URL = `https://localhost:5001/api/`;

const createNewUser = (userData) => {
  return fetch(URL + "users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

const logInUser = (userData) => {
  return fetch(URL + `users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};


const getAllUsers = async () => {
  try {
    const resp = await fetch(URL + `users`);
    const respParsed = await resp.json();
    return respParsed;
  } catch (err) {
    console.log(err);
  }
};

export default { createNewUser, logInUser, getAllUsers };
