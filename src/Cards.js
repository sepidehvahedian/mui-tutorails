import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

function Cards() {
  const [open, setOpen] = useState();

  return (
    <div>
      <Card sx={{ maxWidth: 300, marginTop: "70px" }}>
        <CardMedia
          component={"img"}
          height={"140"}
          image="../../images/antonio-verdin-TjNzMz220Wo-unsplash.jpg"
          alt="test image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component={"div"}>
            Web Design
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            dolorem repellat beatae accusantium dolorum tempore doloremque
            voluptate repellendus, a veritatis.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary" onClick={() => setOpen(true)}>
            Delete
          </Button>
        </CardActions>
      </Card>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Are You Sure</DialogTitle>
        <DialogContent>are you sure to delete this products ?</DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)}>Cancel</Button>
          <Button>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Cards;
