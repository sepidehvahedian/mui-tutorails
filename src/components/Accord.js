import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  TextField,
  Typography,
} from "@mui/material";

function Accord() {
  const courses = ["react", "nodejs", "mern", "nextjs", "UI"];
  return (
    <div style={{ marginTop: "100px" }}>
      <Accordion>
        <AccordionSummary expandIcon=">">
          <Typography variant="h6">What is mern Stack?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero rerum
          voluptate est voluptates. Recusandae ratione iure amet ex, aliquid
          molestias!
        </AccordionDetails>
      </Accordion>
      <Autocomplete
        sx={{ width: 200,marginTop:5 }}
        options={courses}
        renderInput={(params) => (<TextField {...params} label="Selct a course" />)}
      />
    </div>
  );
}

export default Accord;
