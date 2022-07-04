// Packages
import React from "react";
import { Box, CssBaseline } from "@mui/material";
// My components
import TheHeader from "./TheHeader";
import MainBox from "./MainBox";
import AsideMenu from "./AsideMenu";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerWidth: 240,
            sx: {
                display: "flex"
            }
        };
    }
    render() {
        return (<Box sx={this.state.sx}>
            <CssBaseline />
            <TheHeader drawerWidth={this.state.drawerWidth} />
            <AsideMenu drawerWidth={this.state.drawerWidth} />
            <MainBox />
        </Box>);
    }
}