import React, { Component } from 'react';
import { Button, Container, Row, Col, Card, CardImg } from 'reactstrap'

class View extends Component {

    constructor(props){
        super(props)

        this.state = {
            active: false
        }

        this.gridView = this.gridView.bind(this)
        this.listView = this.listView.bind(this)
    }

    gridView(){
        this.setState({
            active: true
        })
    }

    listView(){
        this.setState({
            active: false
        })
    }

    render() {
        return (
            <Container>
                <Row className="pt-5">
                    <Col className="text-center viewBtns">
                        <Button onClick={this.listView}>
                            <i className="fa fa-bars"></i> List
                        </Button> 
                        <Button onClick={this.gridView}>
                            <i className="fa fa-th-large"></i> Grid
                        </Button>
                    </Col>
                </Row>
                <div className="listView pt-5">
                    <Row>
                        <React.Fragment>
                            <div className={this.state.active ? 'col-4' : 'col-12'}>
                                <Card>
                                    <CardImg top width="100%" src="http://afterburn.in/assests/images/shoes/products/nikeShoes1.jpg" alt="Go Mechanics" />
                                </Card>
                            </div>
                            <div className={this.state.active ? 'col-4' : 'col-12'}>
                                <Card>
                                    <CardImg top width="100%" src="http://afterburn.in/assests/images/shoes/products/nikeShoes1.jpg" alt="Go Mechanics" />
                                </Card>
                            </div>
                            <div className={this.state.active ? 'col-4' : 'col-12'}>
                                <Card>
                                    <CardImg top width="100%" src="http://afterburn.in/assests/images/shoes/products/nikeShoes1.jpg" alt="Go Mechanics" />
                                </Card>
                            </div>
                            <div className={this.state.active ? 'col-4' : 'col-12'}>
                                <Card>
                                    <CardImg top width="100%" src="http://afterburn.in/assests/images/shoes/products/nikeShoes1.jpg" alt="Go Mechanics" />
                                </Card>
                            </div>
                            <div className={this.state.active ? 'col-4' : 'col-12'}>
                                <Card>
                                    <CardImg top width="100%" src="http://afterburn.in/assests/images/shoes/products/nikeShoes1.jpg" alt="Go Mechanics" />
                                </Card>
                            </div>
                            <div className={this.state.active ? 'col-4' : 'col-12'}>
                                <Card>
                                    <CardImg top width="100%" src="http://afterburn.in/assests/images/shoes/products/nikeShoes1.jpg" alt="Go Mechanics" />
                                </Card>
                            </div>
                            <div className={this.state.active ? 'col-4' : 'col-12'}>
                                <Card>
                                    <CardImg top width="100%" src="http://afterburn.in/assests/images/shoes/products/nikeShoes1.jpg" alt="Go Mechanics" />
                                </Card>
                            </div>
                            <div className={this.state.active ? 'col-4' : 'col-12'}>
                                <Card>
                                    <CardImg top width="100%" src="http://afterburn.in/assests/images/shoes/products/nikeShoes1.jpg" alt="Go Mechanics" />
                                </Card>
                            </div>
                            <div className={this.state.active ? 'col-4' : 'col-12'}>
                                <Card>
                                    <CardImg top width="100%" src="http://afterburn.in/assests/images/shoes/products/nikeShoes1.jpg" alt="Go Mechanics" />
                                </Card>
                            </div>
                        </React.Fragment>
                    </Row>
                </div>
            </Container>
        );
    }
}

export default View;