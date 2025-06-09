import * as React from "react";
import {
  Typography as Type,
  Button,
  TextField,
  AppBar,
  Toolbar,
} from "@mui/material";
import Form from "./Form";

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Type variant="h4">LOGO</Type>
          <Button
            variant="contained"
            color="success"
            sx={{ marginLeft: "auto" }}
          >
            Sungin
          </Button>
        </Toolbar>
      </AppBar>
      {/* <Form/> */}
    </div>
  );
}

export default App;
