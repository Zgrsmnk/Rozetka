import api from "../../../utils/api";
import { call, put } from "redux-saga/effects";
import { setItems } from "../../slices/productsSlice";

export function* fetchProductsWorker() {
  try {
    const { data } = yield call(api.getProducts);
    yield put(setItems(data));
  } catch (error) {
    console.error(error);
  }
}

export function* createProductWorker(action) {
  try {
    yield call(api.createProduct, action.payload);

    const { data } = yield call(api.getProducts);
    yield put(setItems(data));
  } catch (error) {
    console.error(error);
  }
}

export function* updateProductWorker(action) {
  const { id, data } = action.payload;

  yield call(api.updateProduct, id, data);

  const { data: updated } = yield call(api.getProducts);
  yield put(setItems(updated));
}

export function* deleteProductWorker(action) {
  try {
    yield call(api.deleteProduct, action.payload);

    const { data } = yield call(api.getProducts);
    yield put(setItems(data));
  } catch (error) {
    console.error(error);
  }
}