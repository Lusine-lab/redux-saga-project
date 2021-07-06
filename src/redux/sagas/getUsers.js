import { call, put } from "redux-saga/effects";
import { setSingleUser, setUsers, setCurrentUserPosts } from "../actions";
import {
  addUser,
  getSingleUser,
  getUserList,
  getCurrentUserPosts,
} from "../../api.js";

export function* getUserSaga(action) {
  try {
    const response = yield call(getUserList);
    const data = response.data;
    yield put(setUsers(data));
  } catch (error) {
    console.log("getUserSaga", error);
  }
}

export function* getSingleUserSaga(action) {
  try {
    const response = yield call(getSingleUser, action.id);
    const data = response.data;
    yield put(setSingleUser(data));
  } catch (error) {
    console.log("getUserSaga", error);
  }
}

export function* createUserSaga(action) {
  try {
    /* const response =*/ yield call(addUser, action.user);
    //
    //
    // const data = response.data;
    // yield put(setUsers(data));

    const response = yield call(getUserList);
    const data = response.data;
    yield put(setUsers(data));
  } catch (error) {
    console.log("getUserSaga", error);
  }
}

export function* getCurrentUserPostsSaga(action) {
  try {
    const response = yield call(getCurrentUserPosts, action.id);
    const data = response.data;
    yield put(setCurrentUserPosts(data));
  } catch (error) {
    console.log("getUserSaga", error);
  }
}
