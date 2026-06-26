import { createAction } from "@reduxjs/toolkit";

const productsAsyncAction = {
  getProducts: createAction("products/GET_PRODUCTS"),
  createProduct: createAction("products/CREATE_PRODUCT"),
  updateProduct: createAction("products/UPDATE_PRODUCT"),
  deleteProduct: createAction("products/DELETE_PRODUCT"),
};

export default productsAsyncAction;