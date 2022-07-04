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
import Toolbar from "@mui/material/Toolbar";
// MUI Icons
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
// Other
import { Link } from "react-router-dom";

function ListLink(props = { item: { path: "/", text: "Empty", icon: <InboxIcon /> } }) {
    return (<Link to={props.item.path}>
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    {props.item.icon}
                </ListItemIcon>
                <ListItemText primary={props.item.text} />
            </ListItemButton>
        </ListItem>
    </Link>)
}

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
            wiki_routes: [
                { path: "/wikipedia", text: "Wikipedia", icon: <InboxIcon /> },
                { path: "/wiktionary", text: "Wiktionary", icon: <MailIcon /> },
                { path: "/wikidata", text: "Wikidata", icon: <InboxIcon /> },
                { path: "/drafts", text: "Drafts", icon: <MailIcon /> },
            ],
        };
    }
    render() {
        return (<Drawer sx={this.state.sx} variant="permanent" anchor="left">
            <Toolbar />
            <Divider />
            <List>
                { <ListLink item={{ path: "/", text: "Home", icon: <HomeIcon /> }} /> }
            </List>
            <Divider />
            <List>
                { this.state.wiki_routes.map( (item) => <ListLink item={item} key={item.path} /> ) }
            </List>
        </Drawer>);
    }
}