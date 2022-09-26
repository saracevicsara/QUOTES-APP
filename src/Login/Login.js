import { Button, Grid, TextField } from "@mui/material";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <Grid container columns={{ xs: 4, md: 12 }}>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button variant="contained">Submmit</Button>
      </Grid>
    </div>
  );
};
export default Login;
