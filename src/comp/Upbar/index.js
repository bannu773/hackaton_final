import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, NavLink, useHistory } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useNavigate, useParams } from "react-router-dom";
import Highlight1 from "../HighLight2/HIghlight1";

const pages = [
  "Home",
  "About",
  "Themes",
  "Timeline",
  // "Chief_Guests",
  "Sponsors",
  "FAQS",
  "Team",
];

const useStyles = makeStyles((theme) => ({

  navLink: {
    color: "violet",
    textDecoration: "none",
    fontSize: "23px",
    textShadow: "none",
    "&:hover": {
      color: "#ff1aff", // Change color on hover
      textDecoration: "none", // Remove underline on hover (if needed)
      textShadow: "none",
    },
    "&.active": {
      color: "red", // Change the color to your desired color
    },
  },
  menuLink: {
    color: "white",
    textDecoration: "none",
    fontWeight: "900 !important",
    fontSize: "16px",
    textShadow: "none",
    "&:hover": {
      color: "#ff1aff", // Change color on hover
      textDecoration: "none", // Remove underline on hover (if needed)
      textShadow: "none",
    },
    "&.active": {
      color: "red", // Change the color to your desired color
    },
  },
}));

function UpBar({ scrollToSection }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const classes = useStyles(); // Use the custom styles

  const navigate = useNavigate(); // Get the navigation function
  const { id } = useParams(); // Get the ID from the URL

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuItemClick = (page) => {
    handleCloseNavMenu();
    scrollToSection(page.toLowerCase());
    console.log(page);
  };

  return (
    <AppBar
      position="fixed"
      className="appbar"
      sx={{ paddingLeft: 0, backgroundColor: "black", zIndex: 200 }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 5,
              display: { xs: "none", lg: "flex" },
              fontWeight: 900,
              letterSpacing: ".1rem",

              textDecoration: "none",
            }}
            className={classes.navLink}
          >
            <Highlight1 text={"AVISHKAAR"} />
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu} // Call the handleOpenNavMenu function
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav} // Use anchorElNav instead of anchorElUser
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", lg: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => handleMenuItemClick(page)}
                  component={Link}
                  to={`/${page.toLowerCase()}`} // You can use the 'to' prop to specify the URL
                  exact
                  
                  activeClassName={classes.menuLink} // Add the activeClassName prop

                >
                  <Typography textAlign="center" className={classes.menuLink}>
                    <a href={`${page.toLowerCase()}`}>{page}</a>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleMenuItemClick(page)} // Call handleMenuItemClick with the page name
                exact
                activeClassName={classes.menuLink}
                sx={{ textTransform: "capitalize" }}
              >
                <Typography textAlign="center" className={classes.menuLink}>
                  <a >{page}</a>
                </Typography>
              </Button>
            ))}
          </Box>

          {/* User Menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Event Registration">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <a
                  href="#_"
                  class="relative inline-flex items-center px-9 py-1 overflow-hidden text-lg font-medium text-purple-600  border-2 border-purple-600 rounded-full hover:text-white group hover:bg-gray-50"
                >
                  <span class="absolute left-0 block w-full h-0 transition-all bg-purple-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span class="absolute -right-3 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span class="relative mr-0 ">Register</span>
                </a>
              </IconButton>
              {/* <a
                href="#_"
                class="relative inline-flex items-center justify-start px-8 py-2 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
              >
                <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span class="relative w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  Register
                </span>
              </a> */}
            </Tooltip>
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  component={NavLink}
                  to={`${setting.toLowerCase()}`}
                  exact
                  className={classes.navLink}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default UpBar;
