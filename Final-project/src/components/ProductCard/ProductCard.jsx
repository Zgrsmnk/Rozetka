import { Box, IconButton } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const ProductCard = ({ item }) => {
  console.log("PHOTO:", item.photo);
  return (
    <Box
      sx={{
        width: "273px",
        height: "376px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        padding: "25px",
      }}
    >
      <Box sx={{ width: "209px", height: "139px", marginBottom: "26px" }}>
        <img
          style={{ width: "100%", height: "auto" }}
          src={item.photo}
          alt={item.name}
        />
      </Box>
      <Box
        component="span"
        sx={{
          textAlign: "center",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: 1,
          color: "#000000",
        }}
      >
        {item.name}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          mt: "27px",
        }}
      >
        <Box
          component="span"
          sx={{
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: 1,
            color: "#FC5B00",
          }}
        >
          {item.price}₴
        </Box>
        <Box
          component="span"
          sx={{
            fontWeight: 500,
            fontSize: "15px",
            lineHeight: 1,
            color: "#000000",
          }}
        >
          Кількість:{item.quantity}
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", gap: "12px", mt: "30px" }}
      >
        <IconButton sx={{ color: "#05BC52" }}>
          <ShoppingBasketIcon />
        </IconButton>
        <Box
          component="span"
          sx={{
            fontWeight: 500,
            fontSize: "15px",
            lineHeight: 1,
            color: "#05BC52",
          }}
        >
          Готовий до відправки
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
