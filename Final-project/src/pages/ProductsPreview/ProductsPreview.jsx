import { CssBaseline } from "@mui/material";
import Header from "../../components/Header/Header";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import productsAsyncAction from "../../redux/products/saga/asyncAction";

const ProductsPreview = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(productsAsyncAction.getProducts());
  }, [dispatch]);
  
  return (
    <>
      <CssBaseline />
      <Box sx={{ backgroundColor: "#44B26F", minHeight: "100vh" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Header />
          <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "165px", marginTop: "62px"}}>
            {items.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductsPreview;
