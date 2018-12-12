
import React from "react";
import "./ResultList.css";


import { Card, 
    CardHeader, 
    CardBody } from 'reactstrap';

// Search results list component.
const ResultList = props => (
    <Card className="search-results" id="results" style={{marginTop: 50}}>
        <CardHeader>
            <h2 className="card-header">Search Results</h2>
        </CardHeader>
        <CardBody>
            <ul className="list-group">{props.children}</ul>
        </CardBody>
    </Card>
);

// Export search results list component.
export default ResultList;
