import CONST from "../constants";
import { takeLatest } from "redux-saga/effects";
import { createUserSaga, getSingleUserSaga, getUserSaga } from "./getUsers";

export function* watcherSaga() {
  yield takeLatest(CONST.user.GET_USERS, getUserSaga);
  yield takeLatest(CONST.user.GET_USERS_SINGLE, getSingleUserSaga);
  yield takeLatest(CONST.user.CREATE_USER, createUserSaga);
}
