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
    url: "users/" + id,
    method: "get",
  });
};

export const addUser = (user) => {
  return api({
    url: "users",
    method: "post",
    data: user,
  });
};

export const getCurrentUserPosts = (userId) => {
  return api({
    // url: `users/?${userId}`,
    url: "posts",
    params: {
      userId: userId,
    },
    method: "get",
  });
};
