import * as React from 'react';
import TheHeader from "./TheHeader";
import MainBox from "./MainBox";
import AsideMenu from "./AsideMenu";
// Other
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

export default function PermanentDrawerLeft() {
    const drawerWidth = 240;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <TheHeader drawerWidth={drawerWidth} />
            <AsideMenu drawerWidth={drawerWidth} />
            <MainBox />
        </Box>
    );
}