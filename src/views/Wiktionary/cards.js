import {
    Card, CardContent,
    Typography
} from "@mui/material";

function TextItem(props = { text: "", className: "" }) {
    const baseurl = `https://en.wiktionary.org`;
    // const other_attrs = `target="_blank" rel="noreferrer"`;
    const text = props.text.replace(/href="\/wiki/g, `href="${baseurl}/wiki`);
    const use_html = (__html = "<span>Hello</span>") => ({ __html });
    return <span className={props.className} dangerouslySetInnerHTML={use_html(text)} />;
}

function ExampleList(props = { parsedExamples: [] }) {
    if( Array.isArray(props.parsedExamples) ) {
        return <ul>
            { props.parsedExamples.map( ({ example }, index) => <li key={index}>
                <TextItem className="example" text={example} />
            </li> ) }
        </ul>;
    }
    return <span className="examples" />;
}

function ListItem(props = {
    definition: "",
    examples: [],
    parsedExamples: []
}) {
    return <li>
        <TextItem className="definition" text={props.definition} />
        <ExampleList parsedExamples={props.parsedExamples} />
    </li>;
}

export function Cards(props =  {
    item: {
        languageCode: "",
        partOfSpeech: "",
        language: "",
        definitions: [{
            definition: "",
            examples: [],
            parsedExamples: []
        }],
    }
}) {
    const definitions = props.item.definitions;
    const definitions_cb = ({ definition, examples, parsedExamples }, index) => <ListItem
        key={index}
        definition={definition}
        examples={examples}
        parsedExamples={parsedExamples}
    /> ;
    if( Array.isArray(definitions) === false ) {
        return <p>No results</p>;
    }
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