import CONST from "../constants";
import { takeLatest } from "redux-saga/effects";
import {
  createUserSaga,
  getSingleUserSaga,
  getUserSaga,
  getCurrentUserPostsSaga,
} from "./getUsers";

export function* watcherSaga() {
  yield takeLatest(CONST.user.GET_USERS, getUserSaga);
  yield takeLatest(CONST.user.GET_USERS_SINGLE, getSingleUserSaga);
  yield takeLatest(CONST.user.CREATE_USER, createUserSaga);
  yield takeLatest(CONST.user.GET_CURRENT_USER_POSTS, getCurrentUserPostsSaga);
}
