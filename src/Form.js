import * as React from "react";
import {
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
} from "@mui/material";

function Form() {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    password: "",
    terms: false,
    courses: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // form handling
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          value={inputs.name}
          onChange={(e) => handleChange(e)}
          placeholder="enter name"
          type="text"
          variant="outlined"
          sx={{ margin: "30px" }}
        />
        <br></br>
        <TextField
          name="email"
          value={inputs.email}
          onChange={(e) => handleChange(e)}
          placeholder="enter emial"
          type="email"
          variant="outlined"
          sx={{ margin: "30px" }}
        />
        <br></br>
        <TextField
          name="password"
          value={inputs.password}
          onChange={(e) => handleChange(e)}
          placeholder="enter password"
          type="password"
          variant="outlined"
          sx={{ margin: "30px" }}
        />
        <br />
        <FormControl fullWidth>
          <InputLabel id="menu">Courses</InputLabel>
          <Select
            label="courses"
            name="courses"
            value={inputs.courses}
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"mongodb"}>Mongodb</MenuItem>
            <MenuItem value={"express"}>express</MenuItem>
            <MenuItem value={"Node"}>Node</MenuItem>
            <MenuItem value={"react"}>react</MenuItem>
          </Select>
        </FormControl>
        <br />
        <FormGroup sx={{ margin: "20px" }}>
          <FormControlLabel
            label="I Agree T&C"
            control={
              <Checkbox
                name="terms"
                onChange={(e) => {
                  setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.checked,
                  }));
                }}
              />
            }
          />
        </FormGroup>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </>
  );
}

export default Form;
