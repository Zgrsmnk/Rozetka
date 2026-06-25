import Buttons from "../../components/Buttons/Buttons";
import Header from "../../components/Header/Header";
import { Box, CssBaseline } from "@mui/material";
import ProductTable from "../../components/ProductTable/ProductTable";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useState } from "react";
import ProductModal from "../../components/ModalIcon/ModalAdd";

const ProductsTable = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CssBaseline />
      <Box sx={{ backgroundColor: "#44B26F", minHeight: "100vh" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Header />
          <Buttons setOpen={setOpen} />
          <ProductModal open={open} onClose={() => setOpen(false)} />
          <ProductTable />
        </Box>
      </Box>
    </>
  );
};

export default ProductsTable;
