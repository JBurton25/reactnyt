import React from "react";
import Container from "../container/Container";
import Row from "../Row/Row";
import Col from "../Column/Column";
import './ResultListItem.css';


const ResultListItem = ({ _id, handleSaveButton, title, snippet, date, url }) => (
    <li>
        <Container>
            <Row style={{marginTop: 40}}>
                <Col size="xs-8 sm-9">
                    <h3>{ title }</h3>
                    <p>{ snippet }</p>
                    <p>Published on { date }</p>
                    <a rel="noreferrer noopener" target="_blank" href={ url }>
                        <button className="btn btn-primary">Continue reading</button>
                    </a>
                    <button id = { _id } className = "btn btn-primary save-btn" onClick = {() => handleSaveButton(_id)} > Save article </button>
                </Col>
            </Row>
        </Container>
    </li>
);

export default ResultListItem;