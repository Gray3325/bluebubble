// "use client"; //新增這行才能使用套件
import * as React from "react";
import { useRouter } from "next/navigation";
import styles from "./NavBar.module.css";
import useWindowSize from "./useWindowSize";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const pages = ["News", "AboutUs", "Products", "Favorite"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function NavBar() {
  const router = useRouter();
  const { width } = useWindowSize(); // 只需要取得寬度來決定樣式
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {pages.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {settings.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  if (width > 430) {
    return (
      <nav className={styles.navbar}>
        <button type='button' onClick={() => router.push("/")}>
          BLUEBUBBLE
        </button>
        <button type='button'>News</button>
        <button type='button' onClick={() => router.push("/about")}>
          About Us
        </button>
        <button type='button' onClick={() => router.push("/products")}>
          Products
        </button>
        <button type='button'>
          <i className='fi fi-rr-search'></i>
        </button>
        <button type='button'>
          <i className='fi fi-rr-heart'></i>
        </button>
        <button type='button'>
          <i className='fi fi-rr-shopping-cart'></i>
        </button>
        <button type='button'>Login</button>
      </nav>
    );
  } else {
    return (
      <AppBar position='fixed' sx={{ backgroundColor: "#83d9d0" }}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={toggleDrawer("left", true)}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor='left'
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
              >
                {list("left")}
              </Drawer>
            </Box>
            <Typography
              variant='h5'
              noWrap
              component='a'
              href='#app-bar-with-responsive-menu'
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BLUEBUBBLE
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title=''>
                <IconButton sx={{ p: 0 }}>
                  {/* 登入後顯示頭貼 */}
                  <Avatar alt='Remy Sharp' src='' />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}
