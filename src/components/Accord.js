import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

function Accord() {
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
    </div>
  );
}

export default Accord;
