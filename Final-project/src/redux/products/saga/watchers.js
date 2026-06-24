import { takeEvery } from "redux-saga/effects";
import productsAsyncAction from "./asyncAction";
import { fetchProductsWorker } from "./workers";

export function* productsWatcher() {
    yield takeEvery(productsAsyncAction.getProducts.type, fetchProductsWorker);
}