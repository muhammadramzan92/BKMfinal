import Logo from "../Assets/logo1.jpg";
import  "../Components/Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      text: "Books",
      icon: <InfoIcon />,
      link: "/books",
    },
    {
      text: "Education",
      icon: <InfoIcon />,
      link: "/Education",
    },
    {
      text: "Gallery",
      icon: <CommentRoundedIcon />,
      link: "/Gallery",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      link: "/contact",
    },
  ];

  const renderDesktopMenu = () => {
    return (
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <Link key={item.text} to={item.link}>
            {item.text}
          </Link>
        ))}
      </div>
    );
  };

  const renderMobileMenu = () => {
    return (
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton component={Link} to={item.link}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </div>
    );
  };

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>

      {!isMobile ? renderDesktopMenu() : renderMobileMenu()}
    </nav>
  );
};

export default Navbar;
