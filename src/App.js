import * as React from "react";
import { Typography as Type, Button, TextField } from "@mui/material";
import Form from "./Form";

function App() {
  return (
    <div>
      <Type variant="h2" component={"h1"} sx={{ color: "red" }} disabled>
        Typography
      </Type>
      <Form/>
   
    </div>
  );
}

export default App;
