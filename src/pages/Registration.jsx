import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import Table from "./Table";
import "./Registration.css";

const Registration = () => {
  const gridStyle = {
    padding: 20,
  };
  const paperStyle = {
    padding: 20,
    width: "65%",
    margin: "auto",
    backgroundColor: "#E6E6FA",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: "2%" };

  return (
    <div className="Parent">

      <div id="Parent2">
        <Grid style={gridStyle}>
          <Paper style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <AddCircleOutlineOutlinedIcon />
              </Avatar>
              <h2 style={headerStyle}>Register</h2>
              <Typography variant="caption" gutterBottom>
                Please fill this form to create an account!
              </Typography>
            </Grid>

            <form>
              <TextField
                style={marginTop}
                fullWidth
                label="Name (Prof / Dr / Mr / Ms)"
                placeholder="Enter your name"
              />
              <TextField
                style={marginTop}
                fullWidth
                label="Job Title"
                placeholder="Enter your Job Title"
              />
              <TextField
                style={marginTop}
                fullWidth
                label="Organisation with address"
                placeholder="Enter your Organisation with address"
              />
              <TextField
                style={marginTop}
                fullWidth
                label="Country"
                placeholder="Enter your Country"
              />
              <TextField
                style={marginTop}
                fullWidth
                label="Contact No."
                placeholder="Enter your Contact No."
              />
              <TextField
                style={marginTop}
                fullWidth
                label="Fax"
                placeholder="Enter your Fax"
              />
              <TextField
                style={marginTop}
                fullWidth
                label="Email"
                placeholder="Enter your email"
              />
              <TextField
                style={marginTop}
                fullWidth
                label="Title of the paper"
                placeholder="Enter your Title of the paper"
              />
              <TextField
                style={marginTop}
                fullWidth
                label="Date (dd/mm/yy)"
                placeholder="Enter the Date"
              />

              <FormControl component="fieldset" style={{ marginTop: "2.5%" }}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  style={{ display: "initial" }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                fullWidth
                label="Password"
                placeholder="Enter your password"
              />
              <TextField
                fullWidth
                style={marginTop}
                label="Confirm Password"
                placeholder="Confirm your password"
              />

              <FormControlLabel
                style={marginTop}
                control={<Checkbox name="checkedA" />}
                label="I accept the terms and conditions."
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={marginTop}
              >
                Register
              </Button>
            </form>
          </Paper>

          <Box />
        </Grid>
      </div>
      <div id="Parent1">
        <Table />
      </div>
    </div>
  );
};

export default Registration;
