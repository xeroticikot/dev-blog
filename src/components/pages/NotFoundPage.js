import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component{
    render(){
        return(
            <Fragment>
                <main className="my-5 py-5">
                    <Container className="px-0">
                        <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
                            <Col lg={{ size: 12 }}>
                                <Jumbotron>
                                    <h1>404 - Not Found</h1>
                                    <p>Go back to <Link to='/'>Home</Link></p>
                                </Jumbotron>
                            </Col>
                        </Row>
                    </Container>
                </main>
            </Fragment>
        )
    }
}

export default NotFoundPage;