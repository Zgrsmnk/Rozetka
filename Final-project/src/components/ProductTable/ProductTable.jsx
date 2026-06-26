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

const ProductTable = ({ setOpen, setEditItem, setOpenDelete, setDeleteItem }) => {
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
        mt: "5px",
        gap: "75px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          fontSize: "64px",
          lineHeight: 1,
          color: "white",
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
            <TableRow sx={{ backgroundColor: "#0EC86F" }}>
              <TableCell
                sx={{
                  width: "145px",
                  textAlign: "center",
                  color: "#726969",
                  padding: "10px",
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                №
              </TableCell>
              <TableCell
                sx={{
                  width: "145px",
                  textAlign: "center",
                  color: "#726969",
                  padding: "10px",
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                Category
              </TableCell>
              <TableCell
                sx={{
                  width: "145px",
                  textAlign: "center",
                  color: "#726969",
                  padding: "10px",
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  width: "145px",
                  textAlign: "center",
                  color: "#726969",
                  padding: "10px",
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                Quantity
              </TableCell>
              <TableCell
                sx={{
                  width: "145px",
                  textAlign: "center",
                  color: "#726969",
                  padding: "10px",
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                Price
              </TableCell>
              <TableCell
                sx={{
                  width: "145px",
                  textAlign: "center",
                  color: "#726969",
                  padding: "10px",
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              />
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map((item) => (
              <ProductItem
                key={item.id}
                item={item}
                setEditItem={setEditItem}
                setOpen={setOpen}
                setOpenDelete={setOpenDelete}
                setDeleteItem={setDeleteItem}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductTable;
