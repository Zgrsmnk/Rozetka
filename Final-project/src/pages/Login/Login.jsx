import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import { composeValidators, required } from "../../validators/validators";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Logo from "../../assets/rozetka_logo.svg";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slices/authSlice";
import { saveAuth } from "../../utils/localStorage";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const dispatch = useDispatch();
  
  const submit = (data) => {
    if (data.email === "admin5" && data.password === "admin5") {
      setAuthError("");

      dispatch(loginSuccess());
      saveAuth(true);

      navigate("/productsTable");
    } else {
      setAuthError("The user does not exist");
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const [authError, setAuthError] = useState("");

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: "#44B26F",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundColor: "white",
            width: 500,
            height: 670,
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit(submit)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "80.5px",
              width: "277px",
            }}
          >
            <Box sx={{ pb: "85px" }}>
              <img src={Logo} alt="Logo" />
            </Box>
            <TextField
              fullWidth
              type="text"
              label="User Name"
              variant="filled"
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#44B26F",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#44B26F",
                },
                pb: "46px",
              }}
              {...register("email", {
                validate: composeValidators(required),
              })}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
            <Box sx={{ position: "relative", width: "100%" }}>
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="filled"
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#44B26F",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#44B26F",
                  },
                  pb: "37px",
                }}
                {...register("password", {
                  validate: composeValidators(required),
                })}
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
              />
              <Box
                onClick={() => setShowPassword(!showPassword)}
                sx={{
                  position: "absolute",
                  right: 12,
                  top: 17,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  color: "#44B26F",
                }}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </Box>
            </Box>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#44B26F",
                color: "#fff",
                p: "13px",
                borderRadius: 0,
                mb: "25px",
                fontSize: "18px"
              }}
            >
              Login
            </Button>
            {authError && (
              <Typography
                sx={{
                  color: "red",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                {authError}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
