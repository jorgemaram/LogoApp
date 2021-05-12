import { Row, Col } from 'react-bootstrap';
import styled from '@emotion/styled';
import FB from '../images/FB.png';
import share from '../images/share.png';

const Text = styled.p`
    font-size: 20px;
    line-height: 95%;
`

const CoverCard = ({ author, category, cover_image, date_post, readtime, subcategory, summary, title }) => {

    return (
        <>
            <Col md={4} className='mt-5 mb-4'>
                <h6 className="highlighted"><span className="bold">{category.name}</span> |  {subcategory.name} </h6>
                <h1>{title}.</h1>
                <Text>{summary}.</Text>
                <Row>
                    <Col md={8}>
                        <small className="bold">{author.name}</small><br />
                        <small>{date_post}</small> · <small className="bold">{readtime}</small>

                    </Col>
                    <Col md={4}>
                        <img className="logo" src={FB} alt="Facebook logo" />
                        <img className="logo" src={share} alt="Sharing logo" />
                    </Col>
                </Row>
            </Col>
            <Col md={8}>
                <img className="mainpic" src={cover_image.url} alt="Apartment"/>
            </Col>
        </>
    )
}

export default CoverCard;