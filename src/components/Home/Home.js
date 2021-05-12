import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import data from '../../data.json';
import CoverCard from './Cards/CoverCard';
import MiniCoverCard from './Cards/MiniCoverCard';
import CategoryCard from './Cards/CategoryCard';
import RandomCard from './Cards/RandomCard';
import './Home.css';


class Home extends Component {
    constructor() {
        super()
        this.state = {
            products: { data }
        }
    }
    // componentDidMount() {
    //     console.log(this.state.products.data)
    // }




    render() {
        return (
            <>
                <Container>
                    <div>
                        {window.innerWidth >= 500 ?
                            (
                                <Row className="mt-3 mb-4">
                                    {this.state.products.data.cover.map(elm => <CoverCard key={elm.post_id} {...elm} />)}
                                </Row>
                            )
                            :
                            (
                                <Row className="mt-3 mb-4">
                                    {this.state.products.data.cover.map(elm => <MiniCoverCard key={elm.post_id} {...elm} />)}
                                </Row>
                            )
                        }
                    </div>
                    <div>
                        <h2>Category</h2>
                        <hr />
                        {window.innerWidth >= 500 ?
                            (
                                <Row>
                                    {this.state.products.data.category.map(elm => <CategoryCard key={elm.post_id} {...elm} />)}
                                </Row>)
                            :
                            (
                                <Row>
                                    {this.state.products.data.category.filter(elm => elm.post_id !== 4).map(filteredElm => <CategoryCard key={filteredElm.post_id} {...filteredElm} />)}
                                </Row>
                            )
                        }
                        <hr />
                        <p className="read-more">Read more</p>
                        <Row>
                            {this.state.products.data.random.map(elm => <RandomCard key={elm.post_id} {...elm} />)}
                        </Row>
                    </div>
                </Container>
            </>
        )
    }

}


export default Home