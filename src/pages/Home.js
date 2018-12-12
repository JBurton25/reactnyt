
import React, { Component } from "react";
import Container from "../components/container";
import Row from "../components/Row";
import Col from "../components/Column";
import Jumbotron from '../components/jumbotron/jumbotron';
import SearchForm from '../components/SearchForm/SearchForm'
import ResultList from '../components/ResultList/ResultList'
import ResultListItem from '../components/ResultListItem/ResultListItem'
import SavedArticles from '../components/SavedArticles/SavedArticles';

// Import Footer component.
import Footer from '../components/Footer/Footer'
import api from "../utils/API"

class Home extends Component {
    state = {
        query: "",
        begin: "",
        end: "",
        articles: [],
        results: [],
        error: "",
    };

    // Method for retrieving articles that were saved to the MongoDB database.
    getSavedArticles = () => {
        api.getSavedArticles()
            .then((res) => {
                this.setState({ articles: res.data });
            });
    }

    // Keep track of what user types into topic input field.
    handleTopicChange = (event) => {
        this.setState({ query: event.target.value });
    }

    // Keep track of what user types into start year input field.
    handleStartYearChange = (event) => {
        this.setState({ begin: event.target.value });
    }

    // Keep track of what user types into end year input field.
    handleEndYearChange = (event) => {
        this.setState({ end: event.target.value });
    }

    // When the user clicks the save article button, save the article to the database.
    handleSaveButton = id => {
        const article = this.state.articles.find(article => article._id === id);
        console.log("article: ", article);
        api.saveArticle(article).then(res => this.getSavedArticles());
    }
    

    // When user clicks search, get articles from new york times using nyt article search api.
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Getting NYT Articles");
        console.log("this.state.query: ", this.state.query);
        console.log("this.state.begin: ", this.state.begin);
        console.log("this.state.end: ", this.state.end);
        api.getArticles(this.state.query, this.state.begin, this.state.end)
            .then((res) => {
                this.setState({ articles: res.data.response.docs });
                console.log("this.state.articles: ", this.state.articles);
            });

    };


    render() {
        return (
            <div>
                <Jumbotron />
                <div className="main-content-section">
                    <Container style={{ marginTop: 30 }}>
                        <Row>
                            <Col size="md-12">
                                <SearchForm 
                                    handleFormSubmit={this.handleFormSubmit}
                                    handleTopicChange={this.handleTopicChange}
                                    handleStartYearChange={this.handleStartYearChange}
                                    handleEndYearChange={this.handleEndYearChange}/>
                            </Col>
                        </Row>

                        <Row>
                            <Col size="md-12">
                                <ResultList>
                                    {this.state.articles.map(article => {
                                        return (
                                            <ResultListItem
                                                _id={article._id}
                                                key={article._id}
                                                title={article.headline.main}
                                                date={article.pub_date}
                                                url={article.web_url}
                                                snippet={article.snippet}
                                                handleSaveButton={this.handleSaveButton}
                                            />
                                        );
                                    })}
                                </ResultList>
                            </Col>
                        </Row>
                    </Container>
                    <Container style={{ marginTop: 30 }}>
                        <Row>
                <Col size="md-12">
                    <SavedArticles />
                </Col>
                    </Row>
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}


export default Home;
