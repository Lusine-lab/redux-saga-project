import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers";
import { watcherSaga } from "./sagas/rootSaga";
import sagaMiddleware from "redux-saga";

const saga = sagaMiddleware();

const middleware = [saga, logger];

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));
saga.run(watcherSaga);

export default store;
