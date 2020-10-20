const URL = `https://localhost:5001/api/`;

const authorizedFetch = (url, options = {}) => {
  return fetch(url, {
    method: options.method,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${localStorage.getItem("honey")}`,
    },
    body: options.body,
  });
};

const createNewUser = (userData) => {
  return fetch(URL + "users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
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
      Accept: "application/json",
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
