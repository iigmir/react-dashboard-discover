import React from "react";
// MUI components
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
// MUI Icons
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
// Other
import { Link } from "react-router-dom";

export default class AsideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sx: {
                width: props.drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: props.drawerWidth,
                    boxSizing: "border-box",
                },
            },
        };
    }
    render() {
        return (<Drawer sx={this.state.sx} variant="permanent" anchor="left">
            <List>
                <Link to="/">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                {["Wikipedia", "Wiktionary", "Wikidata", "Drafts"].map((text, index) => (
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
        </Drawer>);
    }
}