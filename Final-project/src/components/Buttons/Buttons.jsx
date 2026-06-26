import { Box, Button } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useNavigate } from "react-router";

const Buttons = ({ setOpen }) => {
  
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 70px 0 70px",
          marginTop: "31px",
        }}
      >
        <Button
          onClick={() => navigate("/productsPreview")}
          variant="outlined"
          startIcon={
            <PersonOutlineOutlinedIcon sx={{ width: "25px", height: "25px" }} />
          }
          sx={{
            backgroundColor: "white",
            color: "#05BC52",
            textTransform: "none",
            width: "179px",
            height: "52px",
            padding: "15px 13px",
          }}
        >
          Preview
        </Button>
        <Button
          onClick={() => setOpen(true)}
          variant="outlined"
          startIcon={<AddIcon sx={{ width: "25px", height: "25px" }} />}
          sx={{
            backgroundColor: "white",
            color: "#05BC52",
            textTransform: "none",
            width: "179px",
            height: "52px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "15px 13px",
          }}
        >
          Add product
        </Button>
      </Box>
    </>
  );
};

export default Buttons;
