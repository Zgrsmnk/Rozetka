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