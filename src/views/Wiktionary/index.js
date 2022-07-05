import React from "react";
// MUI
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// Other
import "./index.css";
import { Cards } from "./cards";

export default class Wiktionary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "Wiktionary",
            response: {},
            error_message: {}
        };
    }
    ajax_url(term = "") {
        const baseurl = "https://en.wiktionary.org";
        return `${baseurl}/api/rest_v1/page/definition/${term}`;
    }
    get rendered_list() {
        return Object.entries( this.state.response ).map( ([languageCode, values]) => ({ languageCode, ...values[0] }) );
    }
    // AJAX
    submit(e) {
        e.preventDefault();
        this.ajax(this.state.term);
    }
    ajax(term = "") {
        // Vars
        const api = this.ajax_url(term);
        const request = async (api = this.ajax_url(term)) => {
            const result = await fetch(api, { method: "GET" }).then( my => {
                if( my.status === 200 ) {
                    return my.json();
                } else {
                    return Promise.reject( my.json() );
                }
            });
            return result;
        };
        // Actions
        this.set_response({});
        request(api).then( response => {
            this.set_response( response );
        }).catch( err => {
            this.set_error_message( err )
        });
    }
    // Set states
    set_response(response = {}) {
        if( typeof(response) === "object" ) {
            this.setState({ response });
        } else {
            this.set_error_message(response);
        }
    }
    set_error_message(error_message) {
        this.setState({ error_message });
        this.set_response([]);
    }
    set_term(e) {
        this.setState({ term: e.target.value.trim() });
    }
    render() {
        const cardkey = item => `${item.languageCode}-${item.partOfSpeech?.replace(" ", "")}`;
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
            <div className="wiktionary-entries">
                <h2>{ this.state.term }</h2>
                { this.rendered_list.map( (item) => <Cards key={cardkey(item)} item={item} /> ) }
            </div>
        </div>);
    }
}