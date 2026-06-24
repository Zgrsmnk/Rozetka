import { all, fork } from "redux-saga/effects";
import {productsWatcher} from "./products/saga/watchers"

export function* rootSaga() {
    yield all([fork(productsWatcher)]);
};