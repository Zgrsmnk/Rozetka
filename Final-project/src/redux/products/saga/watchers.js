import { takeEvery } from "redux-saga/effects";
import productsAsyncAction from "./asyncAction";
import { fetchProductsWorker, createProductWorker } from "./workers";

export function* productsWatcher() {
  yield takeEvery(productsAsyncAction.getProducts.type, fetchProductsWorker);

  yield takeEvery(productsAsyncAction.createProduct.type, createProductWorker);
}
