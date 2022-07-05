import React from "react";
// import { Link } from "react-router-dom";
import {
    Typography,
    TextField,
    IconButton,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default class Wiktionary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            response: [],
        };
    }
    ajax(e) {
        // Vars
        const api = `https://en.wiktionary.org/api/rest_v1/page/definition/${this.state.term}`;
        const request = async (api = "https://en.wiktionary.org/api/rest_v1/page/definition/example") => {
            const result = await fetch(api, { method: "GET" }).then( i => i.json() );
            return result;
        };
        // Actions
        e.preventDefault();
        this.setState({ response: [] });
        request(api).then( response => {
            this.setState({ response });
        });
    }
    set_term(e) {
        this.setState({ term: e.target.value });
    }
    render() {
        return (<div className="wiktionary-page">
            <h1>
                <a href="https://en.wikipedia.org/wiki/Wiktionary" target="_blank" rel="noreferrer">Wiktionary</a>
            </h1>
            <form onSubmit={e => this.ajax(e)} autoComplete="off">
                <TextField label="Query word" variant="standard" name="term" onChange={e => this.set_term(e)} required />
                <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                </IconButton>
            </form>
            <Typography paragraph>
                { JSON.stringify(this.state.response) }
            </Typography>
        </div>);
    }
}