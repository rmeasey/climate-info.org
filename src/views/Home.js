
import { Card, CardHeader, CardBody, Col, Container, Row, CardFooter } from 'reactstrap'
const Home = () => {
    return (
        <>
            <h2>Climate-Info was created for fun!</h2>
            <p>The creator of this site just wanted to have access to all the references he uses, all in one place.</p>
            <p>It contains resouces to check out the state of space weather and the earth reaction to it. The site has been arranged into sections to make loading and finding specific things easier. </p>
            <hr/><br/>
            <Container>
                <Row xs="1" sm="2" md="3">
                    <Col>
                        <Card>
                            <CardHeader><h4>Solar Status</h4></CardHeader>
                            <CardBody>The solar observatory imagery of the sun in various wavelengths.</CardBody>
                            <CardFooter><a className="home-link" color="grey" href="/solar-status">Visit Now</a></CardFooter>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader><h4>Solar Wind</h4></CardHeader>
                            <CardBody>Hs30, Hs60 and Ks forecasts as well as movies of CME Alerts and the WSA-ENLIL Prediction</CardBody>
                            <CardFooter><a className="home-link" color="grey" href="/solar-wind">Visit Now</a></CardFooter>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader><h4>Solar Radiation</h4></CardHeader>
                            <CardBody>Alpha, beta and proton radation detailed 7 day data as well as x-ray flares.</CardBody>
                            <CardFooter><a className="home-link" color="grey" href="/solar-radiation">Visit Now</a></CardFooter>
                        </Card>
                    </Col>
                </Row>
                <Row xs="1" sm="2" md="3">
                    <Col>
                        <Card>
                            <CardHeader><h4>Total Electron Content</h4></CardHeader>
                            <CardBody>World maps, ring current forcast and CTIPe data as well as the seismic activity.</CardBody>
                            <CardFooter><a className="home-link" color="grey" href="/total-electron-content">Visit Now</a></CardFooter>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader><h4>Radiation Belts</h4></CardHeader>
                            <CardBody>Radiation belts, Plasmasphere density and the Schumann resonances spectrogram</CardBody>
                            <CardFooter><a className="home-link" color="grey" href="/radiation-belts">Visit Now</a></CardFooter>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader><h4>Atmosphere</h4></CardHeader>
                            <CardBody>Ionosphere and Magnetosphere movies.</CardBody>
                            <CardFooter><a className="home-link" color="grey" href="/atmosphere">Visit Now</a></CardFooter>
                        </Card>
                    </Col>
                </Row>
                <Row xs="1" sm="2" md="3">
                    <Col>
                        <Card>
                            <CardHeader><h4>X-Ray Flux</h4></CardHeader>
                            <CardBody>X-Ray flux movies, combined and by frequency. </CardBody>
                            <CardFooter><a className="home-link" color="grey" href="/x-ray-flux">Visit Now</a></CardFooter>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader><h4>Auroras</h4></CardHeader>
                            <CardBody>Global aurora forecasts and KP Index detail. </CardBody>
                            <CardFooter><a className="home-link" color="grey" href="/auroras">Visit Now</a></CardFooter>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader><h4>Earth Oceans</h4></CardHeader>
                            <CardBody>The age of the ocean floor in images and a movie. </CardBody>
                            <CardFooter><a className="home-link" color="grey" href="/earth-oceans">Visit Now</a></CardFooter>
                        </Card>
                    </Col>
                </Row>
                <Row xs="1" sm="2" md="3">
                    <Col>
                        <Card>
                            <CardHeader><h4>Earth Winds</h4></CardHeader>
                            <CardBody>The superb Earth Nullschool atmospheric wind globe. </CardBody>
                            <CardFooter><a className="home-link" color="grey" href="/earth-winds">Visit Now</a></CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;
