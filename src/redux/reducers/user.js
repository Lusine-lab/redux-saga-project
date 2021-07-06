import CONST from "../constants";

const initialState = {
  users: undefined,
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case CONST.user.SET_USERS: {
      console.log("action", action);

      return {
        ...state,
        users: action.users,
      };
    }

    default:
      return state;
  }
};

export default userReducers;
