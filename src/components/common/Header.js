import React from 'react';
import logo from '../../logo.svg';
import {
    Container, Row, Col, Form, Input, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, InputGroup, 
    InputGroupAddon
} from 'reactstrap';

const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg';

const Header = () => (
    <header>
        <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>
            <Container>
                <Row noGutters className="position-relative w-100 align-items-center">
                    <Col className="d-none d-lg-flex justify-content-start">
                        <Nav className="mrx-auto" navbar>
                            <NavItem className="d-flex align-items-center">
                                <NavLink className="font-weight-bold" href="/">
                                    <img src={AVATAR} alt="avatar" className="img-fluid rounded-circle" style={{ width: 36 }} />
                                </NavLink>
                            </NavItem>
                            <NavItem className="d-flex align-items-center ml-5">
                                <NavLink className="font-weight-bold" href="/">হোম</NavLink>
                            </NavItem>
                            <NavItem className="d-flex align-items-center">
                                <NavLink className="font-weight-bold" href="/blog">ব্লগ</NavLink>
                            </NavItem>
                            <UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
                                <DropdownToggle className="font-weight-bold" nav caret>কুইক লিঙ্কস</DropdownToggle>
                                <DropdownMenu className="mt-2" right>
                                    <DropdownItem className="font-weight-bold text-secondary text-uppercase" header disabled>কল করুন</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <NavLink className="font-weight-bold" href="/documentation">ডকুমেন্টেশন</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink className="font-weight-bold" href="/blog">টিউটোরিয়াল</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink className="font-weight-bold" href="/blog">কোর্স সমূহ</NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Col>
                    <Col className="d-flex justify-content-xs-start justify-content-lg-center">
                        <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 80 }}>
                            <img src={logo} alt="logo" className="position-relative img-fluid" />
                        </NavbarBrand>
                    </Col>
                    <Col className="d-none d-lg-flex justify-content-end">
                        <Form inline>
                            <InputGroup>
                                <Input type="search" placeholder="খোঁজের বিষয় লিখুন..."/>
                                <InputGroupAddon addonType="append"><Button>খোঁজ করুন</Button></InputGroupAddon>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    </header>
);

export default Header;










