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

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const submit = (data) => {
    if (data.email === "admin5" && data.password === "admin5") {
      setAuthError("");
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
              gap: 5,
              paddingTop: "80.5px",
              width: "277px",
            }}
          >
            <Box>
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
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
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
