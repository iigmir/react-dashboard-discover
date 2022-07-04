import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default class Wiktionary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div>
            <h1>
                <a href="https://en.wikipedia.org/wiki/Wiktionary" target="_blank" rel="noreferrer">Wiktionary</a>
            </h1>
            <Typography paragraph>
                <Link to="/">Wiktionary</Link> is a multilingual, web-based project to create a free content dictionary of terms (including words, phrases, proverbs, linguistic reconstructions, etc.) in all natural languages and in a number of artificial languages. These entries may contain definitions, images for illustrations, pronunciations, etymologies, inflections, usage examples, quotations, related terms, and translations of words into other languages, among other features. It is collaboratively edited via a wiki. Its name is a portmanteau of the words wiki and dictionary. It is available in 183 languages and in Simple English. Like its sister project Wikipedia, Wiktionary is run by the Wikimedia Foundation, and is written collaboratively by volunteers, dubbed "Wiktionarians". Its wiki software, MediaWiki, allows almost anyone with access to the website to create and edit entries.
            </Typography>
        </div>);
    }
}