import Box from "@mui/material/Box";
import RouterView from "../views/index";

export default function MainBox() {
    return (<Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <RouterView />
    </Box>);
}