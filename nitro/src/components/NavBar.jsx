import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const NavBar = () => {
  return (
    <div>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            nipro
          </Typography>
        </Toolbar>
        <Toolbar>
          <Button href="/" variant="text" color="error">
            {" "}
            Home
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
