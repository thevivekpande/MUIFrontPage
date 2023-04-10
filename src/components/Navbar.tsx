import React, { useState } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  Box,
  InputBase,
  styled,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Notifications, Pets } from "@mui/icons-material";

import MailIcon from "@mui/icons-material/Mail";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "gray" : "white",
  padding: "0, 10px",
  borderRadius: theme!.shape!.borderRadius,
  width: "40%",
  color: "text.primary",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Vivek
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase
            placeholder="search..."
            sx={{ padding: "3px", marginLeft: "8px" }}
          />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={() => setOpen(true)}
            sx={{ height: "30px", width: "30px" }}
            src="https://th.bing.com/th/id/OIP.wm4rELHPdg9bcjbty5emngHaH7?pid=ImgDet&rs=1"
          />
        </Icons>
        <UserBox>
          <Avatar
            onClick={() => setOpen(true)}
            sx={{ height: "30px", width: "30px" }}
            src="https://th.bing.com/th/id/OIP.wm4rELHPdg9bcjbty5emngHaH7?pid=ImgDet&rs=1"
          />
          <Typography variant="body2">Vivek</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={() => {}}>Profile</MenuItem>
        <MenuItem onClick={() => {}}>My account</MenuItem>
        <MenuItem onClick={() => {}}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
