import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "./Registration.css";

const UserLogin = ({ handleChange }) => {
  const gridStyle = {
    padding: 155,
  };
  const paperStyle = {
    padding: 15,
    height: "55vh",
    width: 400,
    margin: "0 auto",
    backgroundColor: "#E6E6FA",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const marginTop = { marginTop: "2%" };
  return (
    <Grid style={gridStyle} item xs zeroMinWidth>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Log In</h2>
        </Grid>
        <TextField
          style={marginTop}
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          style={marginTop}
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          style={marginTop}
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Log in
        </Button>
        <Typography style={marginTop}>
          <Link href="#">Forgot password ?</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default UserLogin;
