import { Box } from "@mui/material";
import MainLogo from "../../assets/rozetka_logo_main.svg";


const Header = () => {
  return (
    <Box sx={{ marginTop: "20px", padding: "0 30px" }}>
      <img src={MainLogo} alt="Logo" />
    </Box>
  );
};

export default Header;
