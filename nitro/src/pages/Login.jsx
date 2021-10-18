//@ts-check
import Button from "@mui/material/Button";

const Login = () => {
  return (
    <div>
      <form action="">
        <h1>Login</h1>
        <label htmlFor="login">Email</label>:{" "}
        <input type="email" placeholder="email" name="email" id="email" />
        <label htmlFor="password">Password</label>:{" "}
        <input type="password" name="password" id="password" />
        {"     "}
        <Button size="small" color="primary" variant="contained">
          submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
