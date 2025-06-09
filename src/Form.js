import * as React from "react";
import { Button, TextField } from "@mui/material";

function Form() {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
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
