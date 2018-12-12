import React from 'react';
import { Card, 
    CardBody, 
    CardTitle, 
 } from 'reactstrap';
import Container from "../container/Container";
import './Footer.css';

// Footer component
const Footer = (props) => {
    return (
        <div className="footer">
            <Container >
                <Card>
                    <CardBody>
                        <CardTitle className="footer-heading">
                            New York Times React Search
                        </CardTitle>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
};

export default Footer;