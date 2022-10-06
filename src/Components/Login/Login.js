import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({ password: "", username: "" });
  const { dispatchUserState } = useContext(UserContext);
  const loginSubmit = () => {
    const { username, password } = loginData;
    const loginBody = { username, password };

    axios.post("http://localhost:8000/sessions", loginBody).then(({ data }) => {
      window.history.pushState("", "", "http://localhost:3000/");
      dispatchUserState({ type: "setToken", value: data.accessToken });
    });
  };
  return (
    <div className="body">
      <Grid container direction="column" alignItems="center">
        <h1>LOG IN</h1>
        <Grid sx={{ mt: "20px" }}>
          <TextField
            onChange={(e) => {
              setLoginData({ ...loginData, username: e.target.value });
            }}
            required
            id="outlined-required"
            label="Username"
            className="color"
          />
        </Grid>
        <Grid sx={{ mt: "20px" }}>
          <TextField
            onChange={(e) => {
              setLoginData({ ...loginData, password: e.target.value });
            }}
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            className="color"
          />
        </Grid>
        <Grid sx={{ mt: "20px" }}>
          <Button variant="text " textPrimary="lightblue" onClick={loginSubmit}>
            SUBMIT
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default Login;
