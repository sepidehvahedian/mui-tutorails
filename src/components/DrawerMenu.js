import React, { useState } from "react";
import {
  Alert,
  Button,
  CircularProgress,
  Drawer,
  LinearProgress,
  List,
  ListItemButton,
  ListItemText,
  Rating,
  Snackbar,
  Typography,
} from "@mui/material";

function DrawerMenu() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const courses = ["Reactjs", "Nodejs", "Mongodb", "Mern"];

  return (
    <div style={{ marginTop: "100px" }}>
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
      <br />
      <Snackbar open={true} autoHideDuration={2000}>
        <Alert security="success">This Alert Snackbar</Alert>
      </Snackbar>
      <br />
      <CircularProgress color="secondary" value={75} />
      <LinearProgress />
      <br />
      <Rating
        value={value}
        onChange={(e, val) => setValue(val)}
        size="large"
        precision={0.5}
      />
      <Typography>Rated{value !== undefined ? value : 0}stars</Typography>
    </div>
  );
}

export default DrawerMenu;
