import { takeEvery } from "redux-saga/effects";
import productsAsyncAction from "./asyncAction";
import { fetchProductsWorker, createProductWorker, updateProductWorker, deleteProductWorker } from "./workers";

export function* productsWatcher() {
  yield takeEvery(productsAsyncAction.getProducts.type, fetchProductsWorker);

  yield takeEvery(productsAsyncAction.createProduct.type, createProductWorker);

  yield takeEvery(productsAsyncAction.updateProduct.type, updateProductWorker);

  yield takeEvery(productsAsyncAction.deleteProduct.type, deleteProductWorker);
}
