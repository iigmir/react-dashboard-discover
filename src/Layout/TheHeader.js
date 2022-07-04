import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function TheHeader(props) {
    const sx = { width: `calc(100% - ${props.drawerWidth}px)`, ml: `${props.drawerWidth}px` };
    return (<AppBar position="fixed" sx={sx}>
        <Toolbar>
            <Typography variant="h6" noWrap component="div">
                Permanent drawer
            </Typography>
        </Toolbar>
    </AppBar>);
}