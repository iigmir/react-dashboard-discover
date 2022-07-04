import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default class Wikidata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div>
            <h1>
                <a href="https://en.wikipedia.org/wiki/Wikidata" target="_blank" rel="noreferrer">Wikidata</a>
            </h1>
            <Typography paragraph>
                <Link to="/">Wikidata</Link> is a collaboratively edited multilingual knowledge graph hosted by the Wikimedia Foundation.[2] It is a common source of open data that Wikimedia projects such as Wikipedia,[3][4] and anyone else, can use under the CC0 public domain license. Wikidata is a wiki powered by the software MediaWiki, and is also powered by the set of knowledge graph MediaWiki extensions known as Wikibase.
            </Typography>
        </div>);
    }
}