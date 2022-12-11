import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import blogo from "../static/images/blogo.png";
import { useAuth0 } from "@auth0/auth0-react";
import { Output } from "@mui/icons-material";

const unAuthPages = ["Business", "Culture", "Science", "Music"];
const pages = ["Business", "Culture", "Science", "Music", "MyBlogs"];

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <Box
      sx={{
        flexGrow: 1,
        marginBottom: "2rem",
      }}
    >
      <AppBar
        position="static"
        sx={{ padding: "0rem 5rem", backgroundColor: "#3095CB" }}
      >
        <Toolbar>
          <img
            src={blogo}
            height="26em"
            width="26em"
            alt="logo"
            onClick={() => {
              navigate(`/`);
            }}
          />
          <Typography
            variant="h5"
            fontWeight="700"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              marginRight: "1rem",
              marginTop: "-5px",
            }}
            onClick={() => {
              navigate(`/`);
            }}
          >
            logger
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {isAuthenticated
              ? pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => {
                      navigate(`/${page.toLowerCase()}`);
                    }}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))
              : unAuthPages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => {
                      navigate(`/${page.toLowerCase()}`);
                    }}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
          </Box>
          {isAuthenticated ? (
            <>
              <Button
                variant="contained"
                sx={{ my: 2, color: "white", textTransform: "none" }}
                endIcon={<AddIcon />}
                onClick={() => {
                  navigate(`/createyourblog`);
                }}
              >
                Make A Blog
              </Button>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="400px"
              >
                <Box sx={{ margin: "0.2em 0em 0em 5em", display: "flex" }}>
                  <IconButton size="large" onClick={handleMenu} color="inherit">
                    <Avatar src={user.picture} />
                  </IconButton>
                  <Menu
                    sx={{ margin: "2.3em 0em 0em 5.9em" }}
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={() => logout()}>
                      <Output />
                      Log Out
                    </MenuItem>
                  </Menu>
                </Box>
              </Box>
            </>
          ) : (
            <Button
              variant="contained"
              sx={{ color: "white" }}
              onClick={() => loginWithRedirect()}
            >
              Log In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
