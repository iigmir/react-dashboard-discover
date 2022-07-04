import { Routes, Route, } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
// Routes
import Portal from "./Portal/index";
import Wikipedia from "./Wikipedia/index";
import Wiktionary from "./Wiktionary/index";
import Wikidata from "./Wikidata/index";
// Other routes
import Error404 from "./AlterSystemPages/404";

const page_routes = [
    { path: "/", element: <Portal /> },
    { path: "/wikipedia", element: <Wikipedia /> },
    { path: "/wiktionary", element: <Wiktionary /> },
    { path: "/wikidata", element: <Wikidata /> },
    { path: "/404", element: <Error404 /> },
    // * should at last item
    { path: "*", element: <Error404 /> },
];

export default function RouterView() {
    return (<div id="router-view" className="router-view">
        <Toolbar />
        <Routes>
            { page_routes.map( item => <Route key={item.path} path={item.path} element={item.element} /> ) }
        </Routes>
    </div>)
}