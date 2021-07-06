import { call, put } from "redux-saga/effects";
import { setUsers } from "../actions";
import API, {addUser, getUserList} from "../../api.js";

export function* getUserSaga(action) {
  try {
    const response = yield call(getUserList);
    const data = response.data;
    yield put(setUsers(data));
  } catch (error) {
    console.log("getUserSaga", error);
  }
}

export function* createUserSaga(action) {
  try {
    console.log("tTTTTTTTTTTT " + JSON.stringify(action));
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
