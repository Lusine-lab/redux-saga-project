import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getUserList = () => {
  return api({
    url: "users",
    method: "get",
  });
};

export const getSingleUser = (id) => {
  return api({
    url: "users/" + id ,
    method: "get",
  });
};

export const addUser = (user) => {
  return api({
    url: "users",
    method: "post",
    data : user
  });
};

// const api = new API();
// export default api;
