import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { CssBaseline, Box, TextField, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { composeValidators, required } from "../../validators/validators";
import { useDispatch } from "react-redux";
import productsAsyncAction from "../../redux/products/saga/asyncAction";
import { useEffect } from "react";

export default function ProductModal({ open, onClose, editItem }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const dispatch = useDispatch();

  const submit = (data) => {
    if (editItem) {
      dispatch(
        productsAsyncAction.updateProduct({
          id: editItem.id,
          data,
        }),
      );
    } else {
      dispatch(productsAsyncAction.createProduct(data));
    }

    reset();
    onClose();
  };

  useEffect(() => {
    if (editItem) {
      reset(editItem);
    } else {
      reset({
        category: "",
        name: "",
        quantity: "",
        price: "",
        photo: "",
        description: "",
      });
    }
  }, [editItem, reset]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiPaper-root": {
          margin: 0,
        },
      }}
    >
      <Box sx={{ width: "429px", height: "641px" }}>
        <DialogTitle
          sx={{
            position: "relative",
            padding: "7px 13px",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: 1,
            color: "#D9D9D9",
          }}
        >
          {editItem ? "Edit Product" : "Add Product"}
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 0,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent
          sx={{ backgroundColor: "#D9D9D9", padding: "0px 32px 29px 32px" }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit(submit)}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <CssBaseline />
            <Typography sx={{ mt: "20px", color: "white" }}>
              Category
            </Typography>
            <TextField
              {...register("category", {
                validate: composeValidators(required),
              })}
              error={Boolean(errors.category)}
              helperText={errors.category?.message}
              type="text"
              fullWidth
              sx={{
                width: "360px",
                "& .MuiInputBase-root": {
                  height: "31px",
                  "& .MuiInputBase-input": {
                    padding: "5px 18px",
                    color: "#05BC52",
                  },
                },
                backgroundColor: "white",
                borderRadius: "4px",
              }}
            />
            <Typography sx={{ mt: "20px", color: "white" }}>Name</Typography>
            <TextField
              {...register("name", {
                validate: composeValidators(required),
              })}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
              type="text"
              fullWidth
              sx={{
                width: "360px",
                "& .MuiInputBase-root": {
                  height: "31px",
                  "& .MuiInputBase-input": {
                    padding: "5px 18px",
                    color: "#05BC52",
                  },
                },
                backgroundColor: "white",
                borderRadius: "4px",
              }}
            />
            <Typography sx={{ mt: "20px", color: "white" }}>
              Quantity
            </Typography>
            <TextField
              {...register("quantity", {
                validate: {
                  required: required,
                  minValue: (value) =>
                    Number(value) >= 0 || "Quantity cannot be negative",
                },
              })}
              error={Boolean(errors.quantity)}
              helperText={errors.quantity?.message}
              type="text"
              fullWidth
              sx={{
                width: "360px",
                "& .MuiInputBase-root": {
                  height: "31px",
                  "& .MuiInputBase-input": {
                    padding: "5px 18px",
                    color: "#05BC52",
                  },
                },
                backgroundColor: "white",
                borderRadius: "4px",
              }}
            />
            <Typography sx={{ mt: "20px", color: "white" }}>Price</Typography>
            <TextField
              {...register("price", {
                validate: {
                  required: required,
                  minValue: (value) =>
                    Number(value) >= 0 || "Price cannot be negative",
                },
              })}
              error={Boolean(errors.price)}
              helperText={errors.price?.message}
              type="text"
              fullWidth
              sx={{
                width: "360px",
                "& .MuiInputBase-root": {
                  height: "31px",
                  "& .MuiInputBase-input": {
                    padding: "5px 18px",
                    color: "#05BC52",
                  },
                },
                backgroundColor: "white",
                borderRadius: "4px",
              }}
            />
            <Typography sx={{ mt: "20px", color: "white" }}>Photo</Typography>
            <TextField
              {...register("photo")}
              type="text"
              fullWidth
              sx={{
                width: "360px",
                "& .MuiInputBase-root": {
                  height: "31px",
                  "& .MuiInputBase-input": {
                    padding: "5px 18px",
                    color: "#05BC52",
                  },
                },
                backgroundColor: "white",
                borderRadius: "4px",
              }}
            />
            <Typography sx={{ mt: "20px", color: "white" }}>
              Description
            </Typography>
            <TextField
              {...register("description")}
              type="text"
              fullWidth
              sx={{
                width: "360px",
                "& .MuiInputBase-root": {
                  height: "80px",
                  alignItems: "flex-start",
                },
                "& .MuiInputBase-input": {
                  padding: "5px 18px",
                  color: "#05BC52",
                },
                backgroundColor: "white",
                borderRadius: "4px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                marginTop: "26px",
                gap: "17px",
                alignItems: "center",
                justifyContent: "right",
              }}
            >
              <Button
                onClick={onClose}
                sx={{
                  padding: "7px 30px",
                  backgroundColor: "#726969",
                  color: "white",
                  textTransform: "none",
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                sx={{
                  padding: "7px 30px",
                  backgroundColor: "#44B26F",
                  color: "white",
                  textTransform: "none",
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
}
