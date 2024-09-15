import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FiAlignJustify } from "react-icons/fi";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Container, Link } from "@mui/material";
import { FaPhone } from "react-icons/fa";

import BreadCrumbs from "../shared/breadcrumbs";
import SearchAction from "./seach-action";
import SocialSection from "../shared/social-section";
import { NavLink } from "react-router-dom";
import { navItems } from "../../constants/header";

const drawerWidth = 240;

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        PROTO
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{ backgroundColor: "white", color: "black", padding: "16px 0" }}
      >
        <Container maxWidth={"lg"}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <FiAlignJustify />
            </IconButton>
            <Typography
              component="div"
              sx={{
                display: "inline-block",
                marginLeft: { sm: "0", xs: "auto" },
              }}
            >
              <img src="http://localhost:5173/src/assets/logo.png" alt="logo" />
            </Typography>

            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                flexDirection: "column",
                flexGrow: 1,
                alignItems: "flex-end",
              }}
            >
              <Typography
                component="div"
                sx={{
                  display: "flex",
                  gap: "12px",
                  color: "#999",
                  alignItems: "center",
                }}
              >
                <BreadCrumbs title={"About Us"} />
                <BreadCrumbs title={"Contact Us"} />
                <span className="text-[13px]">|</span>
                <Typography
                  component={"div"}
                  sx={{
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IconButton sx={{ fontSize: "13px", color: "#999" }}>
                    <FaPhone />
                  </IconButton>
                  <Link href="tel:25475545" underline="none" color="#999">
                    (123) 456-789
                  </Link>
                </Typography>
                <span className="text-[13px]">|</span>
                <SearchAction />
              </Typography>
              <Typography component="div" sx={{ display: "flex", py: "12px" }}>
                {navItems.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className={({ isActive }) =>
                      `font-semibold rounded-none text-[13px] py-[10px] px-4 ${
                        isActive
                          ? "bg-[#08c] text-white"
                          : "text-[#08c] bg-white"
                      } hover:text-white hover:bg-[#08c]`
                    }
                  >
                    {item.title}
                  </NavLink>
                ))}
                <SocialSection />
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
