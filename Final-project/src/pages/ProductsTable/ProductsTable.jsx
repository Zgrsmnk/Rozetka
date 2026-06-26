import Buttons from "../../components/Buttons/Buttons";
import Header from "../../components/Header/Header";
import { Box, CssBaseline } from "@mui/material";
import ProductTable from "../../components/ProductTable/ProductTable";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useState } from "react";
import ProductModal from "../../components/ModalIcon/ModalAdd";
import AlertDialog from "../../components/ModalIcon/ModalDelete";
import { useDispatch } from "react-redux";
import productsAsyncAction from "../../redux/products/saga/asyncAction";

const ProductsTable = () => {
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);


  const dispatch = useDispatch();
  return (
    <>
      <CssBaseline />
      <Box sx={{ backgroundColor: "#44B26F", minHeight: "100vh" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Header />
          <Buttons setOpen={setOpen} setEditItem={setEditItem} />
          <ProductModal
            open={open}
            onClose={() => {
              setOpen(false);
              setEditItem(null);
            }}
            editItem={editItem}
          />
          <AlertDialog
            open={openDelete}
            onClose={() => {
              setOpenDelete(false);
            }}
            onDelete={() => {
              dispatch(productsAsyncAction.deleteProduct(deleteItem.id));
              setOpenDelete(false);
              setDeleteItem(null);
            }}
          />
          <ProductTable
            setEditItem={setEditItem}
            setOpen={setOpen}
            setOpenDelete={setOpenDelete}
            setDeleteItem={setDeleteItem}
          />
        </Box>
      </Box>
    </>
  );
};

export default ProductsTable;
