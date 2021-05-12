import { Row, Col } from 'react-bootstrap';
import styled from '@emotion/styled';
import FB from '../images/FB.png';
import share from '../images/share.png';

const HouseImg = styled.img`
    width: 100%;
    margin-bottom: 5px;
`
const Category = styled.h6`
    font-size: 14px;
`
const Title = styled.h4`
    font-size: 28px;
`
const Paragraph = styled.p`
    font-weight: 500;
`

const CategoryCard = ({ author, category, cover_image, date_post, readtime, subcategory, summary, title }) => {



    return (
        <>
            <Col className='mt-4 mb-2' md={4} xs={6}>
                <Row>
                    <Col md={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>
                        <Category className="highlighted"><span className="bold">{category.name}</span> |  {subcategory.name} </Category>
                    </Col>
                    <Col md={{ span: 12, order: 2 }} xs={{ span: 12, order: 2 }}>
                        <Title>{title}.</Title>
                    </Col>
                    <Col md={{ span: 12, order: 3 }} xs={{ span: 12, order: 4 }}>
                        <Paragraph>{summary}.</Paragraph>
                    </Col>
                    <Col md={{ span: 12, order: 4 }} xs={{ span: 12, order: 3 }}>
                        <HouseImg src={cover_image.url} />
                    </Col>
                    <Col md={{ span: 12, order: 5 }} xs={{ order: 5 }}>
                        <Row>
                            <Col md={8} xs={12}>
                                <small className="bold">{author.name}</small><br />
                                <small>{date_post}</small> · <small className="bold">{readtime}</small>
                            </Col>
                            <Col md={4} xs={6}>
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

export default CategoryCard;