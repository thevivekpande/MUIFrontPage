import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"} width={300}>
        <Typography variant="h6" fontWeight={200}>
          Online Freinds..
        </Typography>
        <AvatarGroup max={7} sx={{ marginRight: "40px", position: "initial" }}>
          <Avatar
            alt="Remy Sharp"
            src="https://th.bing.com/th/id/R.661aa707f9bfd1560b007c454e47baa2?rik=i9ZDuKrhqwpJPw&riu=http%3a%2f%2fwww.letuspublish.com%2fwp-content%2fuploads%2f2017%2f04%2fVirat-Kohli-wallpaper.jpg&ehk=OK%2bj%2fC3kB%2bC9VYxLF096xJVBqlOFXWgpEsE7ynIIESY%3d&risl=&pid=ImgRaw&r=0"
          />
          <Avatar
            alt="Travis Howard"
            src="https://th.bing.com/th/id/OIP.OvmQvhm4qT_aYMDrBgukagHaHa?pid=ImgDet&w=960&h=960&rs=1"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://th.bing.com/th/id/OIP.ZEsvcesIJIWuobtY7ReqHwHaI_?pid=ImgDet&w=736&h=894&rs=1"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://th.bing.com/th/id/OIP.a1wy12Pn4q-zn1_V4Yf1jQHaJL?pid=ImgDet&w=720&h=892&rs=1"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://th.bing.com/th/id/OIP.F6CZ2443ZZOl-X8zt5FbZAHaGP?pid=ImgDet&w=650&h=548&rs=1"
          />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar
            alt="Trevor Henderson"
            src="https://static.toiimg.com/photo/imgsize-101942,msid-63922715/63922715.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://static.toiimg.com/photo/imgsize-101942,msid-63922715/63922715.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={200} marginTop={2}>
          Latest Posts..
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={2} sx={{ marginTop: "10px" }}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={200} marginTop={2}>
          Latest Conversations..
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://th.bing.com/th/id/OIP.ZEsvcesIJIWuobtY7ReqHwHaI_?pid=ImgDet&w=736&h=894&rs=1"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://th.bing.com/th/id/R.661aa707f9bfd1560b007c454e47baa2?rik=i9ZDuKrhqwpJPw&riu=http%3a%2f%2fwww.letuspublish.com%2fwp-content%2fuploads%2f2017%2f04%2fVirat-Kohli-wallpaper.jpg&ehk=OK%2bj%2fC3kB%2bC9VYxLF096xJVBqlOFXWgpEsE7ynIIESY%3d&risl=&pid=ImgRaw&r=0"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://static.toiimg.com/photo/imgsize-101942,msid-63922715/63922715.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
];
