import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

// Functional component -> only needs to be rendered.

const Content = (props) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ width: 300 }}
          //   height="200"
          image={props.thumbnailURL}
          alt="Book cover"
        />
        <CardContent>
          <Typography variant="h5" component="Card" gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {props.author}
          </Typography>

          <Typography variant="body2">{props.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Content;
