import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";

export default function AlertDialog({ open, onClose, onDelete }) {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <Box
          sx={{
            width: "429px",
            height: "146px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <DialogContent
            sx={{
              p: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DialogContentText
              sx={{
                color: "#05BC52",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: 1,
              }}
            >
              Are u sure you want to delete this product?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={onClose}
              autoFocus
              sx={{
                backgroundColor: "#D8D5D5",
                padding: "7px 30px",
                color: "white",
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={onDelete}
              sx={{
                backgroundColor: "#FB0000",
                padding: "7px 30px",
                margin: 0,
                color: "white",
              }}
            >
              Delete
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
