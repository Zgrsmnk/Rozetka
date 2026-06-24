import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Typography,
  TableContainer,
  Paper,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import productsAsyncAction from "../../redux/products/saga/asyncAction";
import ProductItem from "../ProductItem/ProductItem";

const ProductTable = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(productsAsyncAction.getProducts());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          fontWeight: 600,
        }}
      >
        Products
      </Typography>

      <TableContainer
        component={Paper}
        sx={{
          width: "872px",
          mx: "auto",
          overflow: "hidden",
        }}
      >
        <Table
          sx={{
            width: 872,
            tableLayout: "fixed",
            borderCollapse: "collapse",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  width: "145px",
                }}
              >
                №
              </TableCell>
              <TableCell
                sx={{
                  width: "145px",
                }}
              >
                Category
              </TableCell>
              <TableCell
                sx={{
                  width: "145px",
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  width: "145px",
                }}
              >
                Quantity
              </TableCell>
              <TableCell
                sx={{
                  width: "145px",
                }}
              >
                Price
              </TableCell>
              <TableCell
                sx={{
                  width: "145px",
                }}
              />
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductTable;
