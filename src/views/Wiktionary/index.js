import React from "react";
// import { Link } from "react-router-dom";
import {
    Typography,
    TextField,
    IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./index.css";

export default class Wiktionary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "Wiktionary",
            response: {},
        };
    }
    get rendered_list() {
        return this.state.response;
    }
    // AJAX
    submit(e) {
        e.preventDefault();
        this.ajax(this.state.term);
    }
    ajax(term = "") {
        // Vars
        const api = `https://en.wiktionary.org/api/rest_v1/page/definition/${term}`;
        const request = async (api = `https://en.wiktionary.org/api/rest_v1/page/definition/${term}`) => {
            const result = await fetch(api, { method: "GET" }).then( i => i.json() );
            return result;
        };
        // Actions
        this.set_response([]);
        request(api).then( response => {
            this.set_response( response );
        });
    }
    // Set states
    set_response(response = []) {
        this.setState({ response });
    }
    set_term(e) {
        this.setState({ term: e.target.value.trim() });
    }
    render() {
        return (<div className="wiktionary-page">
            <h1 className="title">
                <a href="https://en.wikipedia.org/wiki/Wiktionary" target="_blank" rel="noreferrer">Wiktionary</a>
            </h1>
            <form onSubmit={e => this.submit(e)} autoComplete="off" className="param-form">
                <TextField
                    label="Query word" variant="standard" name="term"
                    required
                    onChange={e => this.set_term(e)} 
                    value={this.state.term}
                />
                <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                </IconButton>
            </form>
            <Typography paragraph>
                { JSON.stringify(this.rendered_list) }
            </Typography>
        </div>);
    }
}