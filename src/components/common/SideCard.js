import React, { Fragment } from 'react';
import {
    Button, UncontrolledAlert, Card, CardImg, CardBody,
    CardTitle, CardSubtitle, CardText
} from 'reactstrap';

const BANNER = 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';

const SideCard = () => (
    <Fragment>

        <UncontrolledAlert color="info" className="d-none d-lg-block">
            <strong>Contact me here.</strong>
        </UncontrolledAlert>

        <Card>
            <CardImg top width="100%" src={BANNER} alt="banner" />
            <CardBody>
                <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">Mahmud Abdur Rahman</CardTitle>
                <CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase" style={{ fontSize: '0.8rem' }}>Web Developer, AWS</CardSubtitle>
                <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>Full-stack web developer learning new hacks one day at a time. Web technology enthusiast.</CardText>
                <Button color="success" className="font-weight-bold">View Profile</Button>
            </CardBody>
        </Card>

    </Fragment>
);

export default SideCard;