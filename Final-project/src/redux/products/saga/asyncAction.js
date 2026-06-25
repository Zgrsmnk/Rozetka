import { createAction } from "@reduxjs/toolkit";

const productsAsyncAction = {
  getProducts: createAction("products/GET_PRODUCTS"),
  createProduct: createAction("products/CREATE_PRODUCT"),
};

export default productsAsyncAction;