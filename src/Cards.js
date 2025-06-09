import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function Cards() {
  return (
    <div>
      <Card sx={{ maxWidth: 300,marginTop:'70px' }}>
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
          <Button size="small">Share</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Cards;
