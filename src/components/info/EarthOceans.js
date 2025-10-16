import { Container, Row } from 'reactstrap'

import SeafloorAgeMap from './earth-oceans/SeafloorAgeMap'
import SeafloorAgeMapDetail from './earth-oceans/SeafloorAgeMapDetail'
import SeafloorAgeMov from './earth-oceans/SeafloorAgeMov'

const EarthOceans = () => {
    return (
        <>
            <div className="text-center">
                <Container>
                    <Row xs="1" sm="2">
                        <SeafloorAgeMap />
                        <SeafloorAgeMapDetail />
                    </Row>
                    <Row>
                        <SeafloorAgeMov />
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default EarthOceans;
