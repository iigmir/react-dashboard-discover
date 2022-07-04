import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default class Error404 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div>
            <h1>404</h1>
            <Typography paragraph>
                We are sorry, but the page you are looking for is not found.
            </Typography>
            <Typography paragraph>
                <Link to="/">Go home</Link>
            </Typography>
        </div>);
    }
}