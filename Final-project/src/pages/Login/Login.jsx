import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(submit)}>
          <TextField
            type="text"
            id="filled-basic"
            label="Filled"
            variant="filled"
            {...register("email")}
          />
          <TextField
            type="password"
            id="filled-basic"
            label="Filled"
            variant="filled"
            {...register("password")}
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
