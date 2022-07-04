import { Routes, Route, } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
// Routes
import Portal from "./Portal/index";

const page_routes = [
    { path: "/", element: <Portal /> },
    // * should at last item
    { path: "*", element: <Portal /> },
];

export default function RouterView() {
    return (<div id="router-view" className="router-view">
        <Toolbar />
        <Routes>
            { page_routes.map( item => <Route key={item.path} path={item.path} element={item.element} /> ) }
        </Routes>
    </div>)
}