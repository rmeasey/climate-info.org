import { useState } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'

import TimeAgo from 'react-timeago'

const About = () => {

    const [currentActiveTab, setCurrentActiveTab] = useState('1')
    const toggleTab = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab)
    }
    return (
        <>
            <Container>
                <Row>
                    <Col style={{ display: 'inline-flex' }}>
                        <h6 data-testid="viewproject-details-tab" className={currentActiveTab === "1" ? "custom-nav-selected custom-nav m-3" : "custom-nav m-3"} style={{ cursor: 'pointer' }}
                            onClick={() => { toggleTab("1"); }}
                        >What's New</h6>
                        <h6 data-testid="viewproject-details-tab" className={currentActiveTab === "2" ? "custom-nav-selected custom-nav m-3" : "custom-nav m-3"} style={{ cursor: 'pointer' }}
                            onClick={() => { toggleTab("2"); }}
                        >Coming Soon</h6>
                        <h6 data-testid="viewproject-context-tab" className={currentActiveTab === "3" ? "custom-nav-selected custom-nav m-3" : "custom-nav m-3"} style={{ cursor: 'pointer' }}
                            onClick={() => { toggleTab("3"); }}
                        >About Climate-Info</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            {currentActiveTab === "1" ? (
                                <>
                                    <CardBody className="pb-0">
                                        <div className="container-fluid py-2">
                                            <h4 className='mb-0 text-primary'>New Site Created For Fun</h4>
                                            
                                        </div>
                                        <br />
                                            <Container key={1} className='mx-3'>
                                                <Row>
                                                    <Col>
                                                        <h5 data-testid="about-title" className="fw-bold px-2 mb-0">This is new. Actually, Later on it will be old, but until then it is not.</h5>
                                                        <p><TimeAgo date={new Date(Date.now)}/></p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <p><br></br></p>
                                                    <hr />
                                                </Row>
                                                <br />
                                            </Container>
                                    </CardBody>
                                </>) : (<></>)
                            }
                            {currentActiveTab === "2" ? (
                                <>
                                    <CardBody className="pb-0">
                                        <div className="container-fluid py-2">
                                            <h4 className='mb-0 text-primary'>There Will Be More</h4>
                                        </div>
                                        <br />
                                            <Container className='mx-3'>
                                                <Row>
                                                    <Col>
                                                        <h5 data-testid="about-title" className="fw-bold px-2 mb-0">Soon there will be more stuff added. Until then, it contains the stuff that it does.</h5>
                                                        <br />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <p><br></br></p>
                                                    <hr />
                                                </Row>
                                                <br />
                                            </Container>
                                    </CardBody>
                                </>) : (<></>)
                            }
                            {currentActiveTab === "3" ? (
                                <>
                                    <CardBody className="pb-0">
                                        <div className="container-fluid py-2">
                                            <h4 className='mb-0 text-primary'>Fun Loving Developer Makes New Site</h4>
                                        </div>
                                        <br />
                                            <Container className='mx-3'>
                                                <Row>
                                                    <Col>
                                                        <h5 data-testid="about-title" className="fw-bold px-2 mb-0">This site was created for run by someone who wanted information from all over the place nice and ordered in one place. </h5>
                                                        <br />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <p><br></br></p>
                                                    <hr />
                                                </Row>
                                                <br />
                                            </Container>
                                    </CardBody>
                                </>) : (<></>)
                            }
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default About;
