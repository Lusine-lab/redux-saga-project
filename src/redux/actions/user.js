import CONS from "../constants";

export const getUsers = () => ({
  type: CONS.user.GET_USERS,
});

export const setUsers = (users) => ({
  type: CONS.user.SET_USERS,
  users,
});


export const addUsersAction = (user) => ({
  type: CONS.user.CREATE_USER,
  user,
});
