import React, { useState } from "react";
import {
    Alert,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Snackbar,
} from "@mui/material";

function DrawerMenu() {
  const [open, setOpen] = useState(false);
  const courses = ["Reactjs", "Nodejs", "Mongodb", "Mern"];

  return (
    <div  style={{ marginTop: "100px" }}>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          <List>
            {courses.map((course) => (
              <ListItemButton onClick={() => setOpen(false)}>
                <ListItemText primary={course} />
              </ListItemButton>
            ))}
          </List>
        </List>
      </Drawer>
      <br/>
      <Snackbar open={true} autoHideDuration={2000}>
        <Alert security="success">This Alert Snackbar</Alert>
      </Snackbar>
    </div>
  );
}

export default DrawerMenu;
