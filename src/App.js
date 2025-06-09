import * as React from "react";
import { Typography as Type,Button } from "@mui/material";

function App() {
  return (
    <div>
      <Type variant="h2" component={"h1"} sx={{color:'red'}} disabled> Typography</Type>
      <Button variant="contained" color='success' sx={{margin:'30px'}}>Click Me</Button>
            <Button variant="text">Click Me</Button>
      <Button variant="outlined" onClick={()=>alert('you clicked')} size="large">Click Me</Button>

      <h1>MUI TUTORAILS</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
        voluptates beatae inventore a dolorem officiis facilis pariatur velit
        totam? Provident.
      </p>
    </div>
  );
}

export default App;
