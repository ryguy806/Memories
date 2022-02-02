import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React from "react";
import useStyles from "./styles.js";

const Post = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}></Card>
    </>
  );
};

export default Post;
