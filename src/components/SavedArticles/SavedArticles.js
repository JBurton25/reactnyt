
import React from "react";
import { Card, 
    CardHeader, 
    CardBody } from 'reactstrap';


const SavedArticles = props => (
    <Card className="saved-articles main-content-section" id="articles">
        <CardHeader>
            <h2 class="card-header">Saved articles</h2>
        </CardHeader>
        <CardBody>
            {/* <ul className="list-group search-results">
                {props.results.map(result => (
                    <li key={result} className="list-group-item">
                        <p />
                    </li>
                ))}
            </ul> */}
        </CardBody>
    </Card>
);

export default SavedArticles;