
import React from 'react';
import { Jumbotron } from 'reactstrap';
import './jumbotron.css';

const NYTJumbotron = (props) => {
    return (
        <div className="header">
            <Jumbotron className="text-center jumbotron">
                <h1 className="display-3">New York Times React Search</h1>
                <p className="lead">Search, read, and annotate New York Times articles</p>
            </Jumbotron>
        </div>
    );
};

// Export Jumbotron component.
export default NYTJumbotron;