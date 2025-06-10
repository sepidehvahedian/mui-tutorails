import { Button, Modal, Box, Typography, Link } from "@mui/material";
import React, { useState } from "react";

function Modals() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ marginTop: "70px" }}>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box position={"absolute"} top={"50%"} left={"50%"}>
          <Typography>This Is Modal</Typography>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </Box>
      </Modal>
      <Link
        variant="h4"
        color="secondary"
        href="https://www.youtube.com/watch?v=0euw01oikEw&t=15062s"
        underline="hover"
      >Nav Link</Link>
    </div>
  );
}

export default Modals;
