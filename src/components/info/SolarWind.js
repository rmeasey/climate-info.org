
import { Container, Row } from 'reactstrap'

import Hs30 from './solar-wind/Hs30'
import Hs60 from './solar-wind/Hs60'
import HsKs from './solar-wind/HsKs'
import Forecast from './solar-wind/Forecast'
import WSEnlil from './solar-wind/WSEnlil'

const SolarWind = () => {
    return (
        <>
            <div className="text-center">
                <Container>
                    <Row xs="1" sm="2" md="3">
                        <Hs30 />
                        <Hs60 />
                        <HsKs />
                    </Row>
                    <Row xs="1" sm="2">
                        <Forecast/>
                        <WSEnlil/>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default SolarWind;
