import { TableCell, TableRow } from "@mui/material";

const ProductItem = ({item}) => {
  return (
    <TableRow>
      <TableCell sx={{ width: "145px", textAlign: "center" }}>
        {item.id}
      </TableCell>

      <TableCell sx={{ width: "145px", textAlign: "center" }}>
        {item.Category}
      </TableCell>

      <TableCell sx={{ width: "145px", textAlign: "center" }}>
        {item.Name}
      </TableCell>

      <TableCell sx={{ width: "145px", textAlign: "center" }}>
        {item.Quantity}
      </TableCell>

      <TableCell sx={{ width: "145px", textAlign: "center" }}>
        {item.Price}
      </TableCell>

      <TableCell sx={{ width: "145px" }} />
    </TableRow>
  );
};

export default ProductItem;
