import * as React from "react";
import { useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { LoginContext } from "../ContextProvider/Context";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png"

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const { logindata, setLoginData } = React.useContext(LoginContext);
  const usenav = useNavigate();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const opennew = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

  const goLogin = () => {
    usenav("/login");
  };

  const goProfile = () => {
    usenav("/profile");
  };

  const goRegister = () => {
    usenav("/register");
  };

  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");
    // console.log(token);
    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await res.json();
    // console.log(data);

    if (data.status === 401 || !data) {
      // usenav("*")
      console.log("Error Page redirect");
    } else {
      // console.log("User Verified")
      setLoginData(data);
    }
  };

  const logoutuser = async () => {
    let token = localStorage.getItem("usersdatatoken");
    // console.log(token);
    const res = await fetch("/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        Accept: "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 201) {
      console.log("Logout User!");
      localStorage.removeItem("usersdatatoken");
      setLoginData(false);
      usenav("/login");
      // usenav("*")
    } else {
      console.log("Error");
    }
  };

  useEffect(() => {
    // setTimeout(()=>{
    DashboardValid();
    // }, 2000)
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className="d-flex w-100 justify-content-between"
            variant="h6"
            noWrap
            component="div"
          >
            <Typography component="div" style={{width: "25%"}} ><img className="w-100" src={Logo} alt="" srcset="" /></Typography>
            {/* Departement Of CSE */}
            <div style={{marginBlock:"auto"}}>
              <Button
                id="demo-positioned-button"
                aria-controls={opennew ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={opennew ? "true" : undefined}
                onClick={handleClick}
                className="text-white"
              >
                <AccountCircleOutlinedIcon style={{fontSize : "40px"}} />
              </Button>
              <Menu
                style={{ marginTop: "34px" }}
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={opennew}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                {logindata ? (
                  <>
                    <MenuItem
                      onClick={() => {
                        goProfile();
                        handleMenuClose();
                      }}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        logoutuser();
                        handleMenuClose();
                      }}
                    >
                      Logout
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem
                      onClick={() => {
                        goRegister();
                        handleMenuClose();
                      }}
                    >
                      Register
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        goLogin();
                        handleMenuClose();
                      }}
                    >
                      Login
                    </MenuItem>
                  </>
                )}
              </Menu>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItemButton href="/">
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              <Diversity3OutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Department"} />
          </ListItem>
          {/* <ListItem>
              <ListItemButton href='/'>
                <ListItemIcon>
                   <MailIcon />
                </ListItemIcon>
                <ListItemText primary={"Accreditation and Affiliation"} />
              </ListItemButton>
            </ListItem> */}
          {/* <ListItem>
              <ListItemButton href='/'>
                <ListItemIcon>
                   <MailIcon />
                </ListItemIcon>
                <ListItemText primary={"Facilities"} />
              </ListItemButton>
            </ListItem> */}
          <ListItem>
            <ListItemButton href="/facultynew">
              {/* <ListItemIcon>
                   <MailIcon />
                </ListItemIcon> */}
              <ListItemText primary={"Faculty"} />
            </ListItemButton>
          </ListItem>
          {/* <ListItem>
              <ListItemButton href='/'>
                <ListItemText primary={"Students"} />
              </ListItemButton>
            </ListItem> */}
          <div className="department my-2">
            <Dropdown>
              <Dropdown.Toggle
                className="border-0 m-auto d-block w-75 text-start bg-transparent ms-1"
                variant=""
                id="dropdown-basic"
              >
                Students
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/students21-25">Session2021-25</Dropdown.Item>
                <Dropdown.Item href="/students20-24">Session2020-24</Dropdown.Item>
                <Dropdown.Item href="/students19-23">Session2019-23</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <ListItem>
            <ListItemButton href="/programs">
              {/* <ListItemIcon>
                   <MailIcon />
                </ListItemIcon> */}
              <ListItemText primary={"Programmes and Syllabi"} />
            </ListItemButton>
          </ListItem>
          {/* <ListItem>
              <ListItemButton href='/'>
                <ListItemIcon>
                   <MailIcon />
                </ListItemIcon>
                <ListItemText primary={"MOU"} />
              </ListItemButton>
            </ListItem> */}
          <ListItem>
            <ListItemButton href="/allnotes">
              {/* <ListItemIcon>
                   <MailIcon />
                </ListItemIcon> */}
              <ListItemText primary={"Notes"} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton href="/allquestions">
              {/* <ListItemIcon>
                   <MailIcon />
                </ListItemIcon> */}
              <ListItemText primary={"Questions"} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton href="/success_stories">
              {/* <ListItemIcon>
                   <MailIcon />
                </ListItemIcon> */}
              <ListItemText primary={"Sucess Stories"} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton href="/payment">
              {/* <ListItemIcon>
                   <MailIcon />
                </ListItemIcon> */}
              <ListItemText primary={"Payments"} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton href="/grievance">
              {/* <ListItemIcon>
                   <MailIcon />
                </ListItemIcon> */}
              <ListItemText primary={"Grievance"} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemButton href="/contact">
              <ListItemIcon>
                <ContactSupportOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"Contant Us"} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <div className="department my-2">
            <Dropdown>
              <Dropdown.Toggle
                className="border-0 m-auto d-block w-75"
                variant=""
                id="dropdown-basic"
              >
                Admin
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {/* {['Student', 'Admin'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))} */}
        </List>
        <Divider />
        {/* <List>
          <div className="department">
            <Dropdown>
              <Dropdown.Toggle
                className="border-0 m-auto d-block w-75"
                variant=""
                id="dropdown-basic"
              >
                Student
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Register</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Divider />
        </List> */}
      </Drawer>
      <Main className="p-0" open={open}>
        {/* <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </Main>
    </Box>
  );
}
