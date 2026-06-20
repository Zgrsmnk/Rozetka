import Login from "../pages/Login/Login";
import ProductsPreview from "../pages/ProductsPreview/ProductsPreview";
import ProductsTable from "../pages/ProductsTable/ProductsTable";

export const routes = {
  login: {
    element: <Login />,
    path: "/",
    id: 1,
  },
  productsTable: {
    element: <ProductsTable />,
    path: "/productsTable",
    id: 2,
  },
  productsPreview: {
    element: <ProductsPreview />,
    path: "/productsPreview",
    id: 3,
  },
};