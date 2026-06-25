import { TableCell, TableRow } from "@mui/material";
import ModeIcon from "@mui/icons-material/Mode";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Box, IconButton, } from "@mui/material";
import { formatPrice } from "../../utils/formatPrice";


const ProductItem = ({item}) => {
  return (
    <TableRow>
      <TableCell
        sx={{
          width: "145px",
          textAlign: "center",
          color: "#FFFFFF",
          backgroundColor: "#D9D9D9",
        }}
      >
        {item.id}
      </TableCell>

      <TableCell
        sx={{
          width: "145px",
          textAlign: "center",
          color: "#FFFFFF",
          backgroundColor: "#D9D9D9",
        }}
      >
        {item.category}
      </TableCell>

      <TableCell
        sx={{
          width: "145px",
          textAlign: "center",
          color: "#FFFFFF",
          backgroundColor: "#D9D9D9",
        }}
      >
        {item.name}
      </TableCell>

      <TableCell
        sx={{
          width: "145px",
          textAlign: "center",
          color: "#FFFFFF",
          backgroundColor: "#D9D9D9",
        }}
      >
        {item.quantity}
      </TableCell>

      <TableCell
        sx={{
          width: "145px",
          textAlign: "center",
          color: "#FFFFFF",
          backgroundColor: "#D9D9D9",
        }}
      >
        {formatPrice(item.price)}
      </TableCell>

      <TableCell sx={{ width: "145px", backgroundColor: "#D9D9D9" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <IconButton size="small">
            <ModeIcon sx={{ color: "#000000" }} />
          </IconButton>

          <IconButton size="small">
            <InventoryIcon sx={{ color: "#000000" }} />
          </IconButton>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default ProductItem;
