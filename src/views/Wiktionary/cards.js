// import * as React from 'react';
import {
    // Cards
    Card, CardContent,
    Typography
} from "@mui/material";

function ListItem(props = { definition: "" }) {
    const baseurl = `https://en.wiktionary.org`;
    // const other_attrs = `target="_blank" rel="noreferrer"`;
    // ${other_attrs}
    const definition = props.definition.replace(/href="\/wiki/g, `href="${baseurl}/wiki`);
    const use_html = (__html = "<span>Hello</span>") => ({ __html });
    return <li dangerouslySetInnerHTML={use_html(definition)} />;
}

export function Cards(props =  {
    item: {
        "languageCode": "",
        "partOfSpeech": "",
        "language": "",
        "definitions": [{ definition: "" }]
    }
}) {
    const definitions = props.item.definitions;
    const definitions_cb = ({ definition }, index) => <ListItem key={index} definition={definition} /> ;
    return (<Card className="item">
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                { props.item.languageCode }
            </Typography>
            <Typography variant="h5">
                { props.item.language }
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                { props.item.partOfSpeech }
            </Typography>
            <div className="definition-list">
                <ul>{ definitions.map( definitions_cb ) }</ul>
            </div>
        </CardContent>
    </Card>);
}