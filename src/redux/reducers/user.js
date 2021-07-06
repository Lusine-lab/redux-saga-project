import CONST from "../constants";

const initialState = {
  users: undefined,
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case CONST.user.SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }

    case CONST.user.SET_SINGLE_USER: {
      return {
        ...state,
        currentUser: action.user,
      };
    }
    case CONST.user.SET_CURRENT_USER_POSTS: {
      return {
        ...state,
        currentUserPosts: action.posts,
      };
    }

    default:
      return state;
  }
};

export default userReducers;
