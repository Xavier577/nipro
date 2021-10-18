//@ts-check
import Button from "@mui/material/Button";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <label>nipro</label>

      <div className="nav-buttons">
        <Button href="/" variant="text" color="primary">
          Home
        </Button>
        <Button href="/login" variant="text" color="primary">
          Login
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
