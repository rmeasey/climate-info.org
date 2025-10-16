
import { Container, Row } from 'reactstrap'

import Ionosphere from './atmosphere/Ionosphere'
import WRSIonosphere from './atmosphere/WFSNeutral'
import MagnetosphereVelocity from './atmosphere/MagnetosphereVelocity'
import MagnetospherePressure from './atmosphere/MagnetospherePressure'
import MagnetosphereDensity from './atmosphere/MagnetosphereDensity'
import GeospaceGlobal from './atmosphere/GeospaceGlobal'

const Atmosphere = () => {
    return (
        <>
            <div className="text-center">
                <Container>
                    <Row xs="1" sm="2">
                        <Ionosphere/>
                        <WRSIonosphere/>
                    </Row>
                    <Row xs="1" sm="2">
                        <MagnetosphereVelocity/>
                        <MagnetospherePressure/>
                    </Row>
                    <Row xs="1" sm="2">
                        <MagnetosphereDensity/>
                        <GeospaceGlobal/>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Atmosphere;
