import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default class Wikipedia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div>
            <h1>
                <a href="https://en.wikipedia.org/wiki/Wikipedia" target="_blank" rel="noreferrer">Wikipedia</a>
            </h1>
            <Typography paragraph>
                <Link to="/">Consequat</Link> mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
        </div>);
    }
}