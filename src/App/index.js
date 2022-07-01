import * as React from 'react';
import TheHeader from "./TheHeader";
import MainBox from "./MainBox";
import AsideMenu from "./AsideMenu";
// Other
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <TheHeader drawerWidth={drawerWidth} />
            <AsideMenu drawerWidth={drawerWidth} />
            <MainBox />
        </Box>
    );
}