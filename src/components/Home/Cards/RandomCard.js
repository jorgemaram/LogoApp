import { Row, Col } from 'react-bootstrap';
import styled from '@emotion/styled';
import FB from '../images/FB.png';
import share from '../images/share.png';

const HouseImg = styled.img`
    height: 300px;
    width: 100%;
    margin-bottom: 5px;
`
const Title = styled.h4`
    font-size: 32px;
`
const Paragraph = styled.p`
    font-weight: 500;
    font-size: 24px;
`


const RandomCard = ({ author, category, cover_image, date_post, readtime, subcategory, summary, title }) => {

    return (
        <>
            <Col className='mt-5 mb-4' md={6}>
                <Row>
                    <Col md={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>
                        <h6 className="highlighted"><span className="bold">{category.name}</span> |  {subcategory.name} </h6>
                    </Col>
                    <Col md={{ span: 12, order: 2 }} xs={{ span: 12, order: 3 }}>
                        <Title>{title}.</Title>
                    </Col>
                    <Col md={{ span: 12, order: 3 }} xs={{ span: 12, order: 4 }}>
                        <Paragraph>{summary}.</Paragraph>
                    </Col>
                    <Col md={{ span: 12, order: 4 }} xs={{ span: 12, order: 2 }}>
                        <HouseImg src={cover_image.url} alt="Apartment image"/>
                    </Col>
                    <Col md={{ span: 12, order: 5 }} xs={{order: 5}}>
                        <Row>
                            <Col md={5} xs={6}>
                                <small className="bold">{author.name}</small><br />
                                <small>{date_post}</small> · <small className="bold">{readtime}</small>
                            </Col>
                            <Col md={4} xs={{ span: 3, offset: 3 }}>
                                <img className="logo" src={FB} alt="Facebook logo" />
                                <img className="logo" src={share} alt="Sharing logo" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default RandomCard;