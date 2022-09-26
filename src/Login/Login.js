import { Button, Grid, TextField } from "@mui/material";
import "./Login.css";

const Login = () => {
  return (
    <div className="body">
      <Grid container direction="column" alignItems="center">
        <h1>LOG IN</h1>
        <Grid sx={{ mt: "20px" }}>
          <TextField
            required
            id="outlined-required"
            label="Username"
            className="color"
          />
        </Grid>
        <Grid sx={{ mt: "20px" }}>
          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            className="color"
          />
        </Grid>
        <Grid sx={{ mt: "20px" }}>
          <Button variant="contained">SUBMIT</Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default Login;
