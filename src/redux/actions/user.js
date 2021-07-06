import CONS from "../constants";

export const getUsers = () => ({
  type: CONS.user.GET_USERS,
});

export const getSingleUser = (id) => ({
  type: CONS.user.GET_USERS_SINGLE,
  id: id,
});

export const setUsers = (users) => ({
  type: CONS.user.SET_USERS,
  users,
});

export const setSingleUser = (user) => ({
  type: CONS.user.SET_SINGLE_USER,
  user,
});

export const addUsersAction = (user) => ({
  type: CONS.user.CREATE_USER,
  user,
});

export const getCurrentUserPosts = () => ({
  type: CONS.user.GET_CURRENT_USER_POSTS,
});

export const setCurrentUserPosts = (posts) => ({
  type: CONS.user.SET_CURRENT_USER_POSTS,
  posts,
});
