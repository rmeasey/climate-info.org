
import { Container, Row } from 'reactstrap'

import RealTimeRB from './radiation-belts/RealTimeRB'
import PlasmaDensity from './radiation-belts/PlasmaDensity'
import SchumannResonances from './radiation-belts/SchumannResonances'

const RadiationBelts = () => {
    return (
        <>
            <div className="text-center">
                <Container>
                    <Row xs="1" sm="2">
                        <RealTimeRB />
                        <PlasmaDensity />
                    </Row>
                    <Row>
                        <SchumannResonances />
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default RadiationBelts;
