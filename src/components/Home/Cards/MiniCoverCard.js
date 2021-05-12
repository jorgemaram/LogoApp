import { Row, Col } from 'react-bootstrap';
import styled from '@emotion/styled';
import FBW from '../images/FB_white.png';
import share_white from '../images/share_white.png';

const Text = styled.p`
    font-size: 20px;
    line-height: 95%;
`
const WhiteText = styled.small`
    color: #fff
`


const MiniCoverCard = ({ author, category, cover_image, date_post, readtime, subcategory, summary, title }) => {

    return (
        <>
            <Col className='mt-4 mb-4'>
                <h6 className="highlighted"><span className="bold">{category.name}</span> |  {subcategory.name} </h6>
                <h1>{title}.</h1>
                <Text>{summary}.</Text>
                <Row>
                    <Col xs={7}>
                        <WhiteText className="bold">{author.name}</WhiteText><br />
                        <WhiteText>{date_post} · </WhiteText><WhiteText className="bold">{readtime}</WhiteText>

                    </Col>
                    <Col xs={5}>
                        <img className="white-logo" src={FBW} alt="Facebook white logo" />
                        <img className="white-logo" src={share_white} alt="Sharing white logo" />
                    </Col>
                </Row>
                <img className="mini" src={cover_image.url} alt="Apartment" />
                <div className='mini-c'>
                </div>
            </Col>
        </>
    )
}

export default MiniCoverCard;