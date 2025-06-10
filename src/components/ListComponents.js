import React from "react";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

function ListComponents() {
    const courses=["react","nodejs",'mern']
  return (
    <div style={{ marginTop: "100px" }}>
      <List sx={{ width: 250, backgroundColor: "gray" }}>
       {courses.map(course=> <ListItem>
          <ListItemButton>{">"}</ListItemButton>
          <ListItemText primary={course} />
        </ListItem>)}
      </List>
    </div>
  );
}

export default ListComponents;
