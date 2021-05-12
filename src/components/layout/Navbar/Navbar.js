
import './Navbar.css';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import Menu from './images/menu.png'
import Logo from './images/LOGO.png'
import Search from './images/search.png'


const navbar = () => {
    return (
        <>
            <Container>
                <Row>
                    <Navbar expand="m">
                        <Navbar.Toggle aria-controls="basic-navbar-nav">
                            <img
                                alt="Logo"
                                src={Menu}
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                            />
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#">Category</Nav.Link>
                                <Nav.Link href="#">Category</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Brand href="#">
                            <img
                                alt="Logo"
                                src={Logo}
                                height="30"
                                className="d-inline-block align-top"
                            />
                        </Navbar.Brand>
                        <Navbar.Brand href="#">
                            <img
                                alt="Logo"
                                src={Search}
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                            />
                        </Navbar.Brand>
                    </Navbar>
                </Row>
            </Container>
            <Container className="subnavbar">
                <Row className="justify-content-md-center">
                    <Col xs lg="2"><a href="#">Category</a></Col>
                    <Col xs lg="2"><a href="#">Category</a></Col>
                    <Col xs lg="2"><a href="#">Category</a></Col>
                </Row>
            </Container>

        </>
    )
}

export default navbar;