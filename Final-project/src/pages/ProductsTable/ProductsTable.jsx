import Buttons from "../../components/Buttons/Buttons";
import Header from "../../components/Header/Header";
import { Box, CssBaseline } from "@mui/material";

const ProductsTable = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ backgroundColor: "#44B26F", minHeight: "100vh" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Header />
          <Buttons />
        </Box>
      </Box>
    </>
  );
};

export default ProductsTable;
