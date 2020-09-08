import React, { Fragment, Component } from 'react';
import {
    Container, Row, Col, Badge
} from 'reactstrap';
import NotFoundPage from '../pages/NotFoundPage';

const tryRequire = (path) => {
    try {
        return require(`${path}`);
    } catch (err) {
        return null;
    }
};

class SinglePost extends Component {

    state = { post: [] }

    render() {
        const post = tryRequire('./json/' + this.props.match.params.id + '.json');
        return (
            <Fragment>
                {post ? <main className="my-5 py-5">
                    <Container className="px-0">
                        <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">

                            <Col lg={{ size: 12 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
                                <div className="position-relative">

                                    <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
                                        {post.time}
                                        <Badge pill color="success" className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle" style={{ fontSize: '0.75rem' }}>{post.date}</Badge>
                                    </span>

                                    <span className="d-block pb-4 h2 text-dark border-bottom border-gray">{ post.title }</span>

                                    <div className="py-3 border-bottom">
                                        <div className="sharethis-inline-share-buttons"></div>
                                    </div>

                                    <article className="pt-5 text-secondary text-justify" style={{ fontSize: '1.2rem', whiteSpace: 'pre-line' }}>{post.content}</article>

                                </div>
                            </Col>

                        </Row>
                    </Container>
                </main> : <NotFoundPage />
                }
            </Fragment>
        )
    }
}

export default SinglePost;