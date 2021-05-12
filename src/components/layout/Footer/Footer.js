import { Container, Row, Col } from 'react-bootstrap';
import styled from '@emotion/styled';
import Logo from './images/LOGO_white.png';

const FinalFooter = styled.div`
    background-color: rgb(33,7,18);
    color: white;
    padding-bottom: 75px;
`

const LogoImg = styled.img`
    padding: 30px;
    width: 155px;
    margin-top: 10px;
`
const List = styled.li`
    list-style-type: none;
    font-weight: 200;
`


const Footer = () => {
    return (
        <>
            <Container expand="xl">
                <FinalFooter>
                    <LogoImg src={Logo} alt="Logo white" />
                    <Row>
                        <Col md={{ span: 2, offset: 1 }} xs={{ span: 5, offset: 1 }}>
                            <h5>Category</h5>
                            <List>Subcategory 1</List>
                            <List>Subcategory 2</List>
                        </Col>
                        <Col md={3} xs={{ span: 5}}>
                            <h5>Category</h5>
                            <List>Subcategory 1</List>
                            <List>Subcategory 2</List>
                        </Col>
                    </Row>
                </FinalFooter>
            </Container>
        </>
    )
}

export default Footer;