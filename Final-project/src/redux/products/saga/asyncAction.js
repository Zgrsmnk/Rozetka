import { createAction } from "@reduxjs/toolkit";

const productsAsyncAction = {
    getProducts: createAction("products/GET_PRODUCTS"),
};

export default productsAsyncAction;