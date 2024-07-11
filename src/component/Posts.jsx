import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Checkbox, Menu, MenuItem } from "@mui/material";
import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";

const Posts = () => {
  const myCards = [
    {
      letter: "K",
      color: "royalblue",
      userName: "Ali Hassan",
      imgLink:
        "https://i.pinimg.com/236x/ca/38/f3/ca38f3d17a4bed3f11a2b493930b1780.jpg",
    },
    {
      letter: "A",
      color: "purple",
      userName: "do3aa Hassan",
      imgLink:
        "https://i.pinimg.com/236x/3a/7f/92/3a7f920a8b6f6ea787645c807b0f864c.jpg",
    },
    {
      letter: "N",
      color: "teal",
      userName: "Alaa Hassan",
      imgLink:
        "https://i.pinimg.com/236x/38/70/f7/3870f7546c2ae7c0867e75fbb87e8660.jpg",
    },
    {
      letter: "M",
      color: "royalblue",
      userName: "Walaa Hassan",
      imgLink:
        "https://i.pinimg.com/564x/74/cc/87/74cc87a15ef4840ee9ce8f59731f4742.jpg",
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: "3" }}>
      {myCards.map((item) => {
        return (
          <Card sx={{ maxWidth: 444, mx: "auto", my: 5 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: item.color }} aria-label="recipe">
                  {item.letter}
                </Avatar>
              }
              action={
                <IconButton onClick={handleClick} aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.userName}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={item.imgLink}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />

              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>

              <Box flexGrow={1} />

              <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
            </CardActions>
          </Card>
        );
      })}

      {renderMenu}
    </Box>
  );
};

export default Posts;
