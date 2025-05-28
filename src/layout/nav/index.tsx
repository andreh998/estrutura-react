import { Collapse, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { navListCollapsedStyle, navStyle } from "./nav-style"
import { Link } from "react-router-dom"
import { ExpandLess, ExpandMore } from "@mui/icons-material"
import { useState } from "react"

interface NavProp {
  openNav: boolean
}

export default function Nav({ openNav }: NavProp) {
  
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      transitionDuration={{ enter: 250, exit: 100 }}
      sx={ navStyle }
      variant="persistent"
      anchor="left"
      open={ openNav }
    >
      <List>
        <ListItem>
          <ListItemButton
            component={Link}
            to="/"
          >
            <ListItemText>Home</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            component={Link}
            to="/page1"
          >
            <ListItemText>Page1</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            component={Link}
            to="/page2"
          >
            <ListItemText>Page2</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem  onClick={handleClick}>
          <ListItemButton>
            <ListItemText>More</ListItemText>
             {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List sx={navListCollapsedStyle} component="div" disablePadding>
            <ListItem>
              <ListItemButton
                component={Link}
                to="/page1"
              >
                <ListItemText>Page1</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton
                component={Link}
                to="/page2"
              >
                <ListItemText>Page2</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  )
}