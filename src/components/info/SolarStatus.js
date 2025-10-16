
import { Container, Row } from 'reactstrap'
import SDO131 from './solar-status/SDO131'
import SDO171 from './solar-status/SDO171'
import SDO193 from './solar-status/SDO193'
import SDO211 from './solar-status/SDO211'
import SDO304 from './solar-status/SDO304'
import SDO335 from './solar-status/SDO335'
import SunspotActivity from './solar-status/SunspotActivity'
import MagneticActivity from './solar-status/MagneticActivity'
import SDOHMii from './solar-status/GOESThematic'
import FarsideMap from './solar-status/FarsideMap'
import LASCO_C3_Combo from './solar-status/LASCO_C3_Combo'
import LASCO_C2_Combo from './solar-status/LASCO_C2_Combo'

const SolarStatus = () => {
    return (
        <>
            <div className="text-center">
                <Container>
                    <Row xs="1" sm="2" md="3">
                        <SDO131 />
                        <SDO171 />
                        <SDO193 />
                    </Row>
                    <Row xs="1" sm="2" md="3">
                        <SDO211 />
                        <SDO304 />
                        <SDO335 />
                    </Row>
                    <Row xs="1" sm="2">
                        <LASCO_C2_Combo />   
                        <LASCO_C3_Combo /> 
                    </Row>
                    <Row xs="1" sm="2" md="3">
                        <SunspotActivity/>
                        <MagneticActivity/>
                        <SDOHMii/>
                    </Row>
                    <Row>
                        <FarsideMap/>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default SolarStatus;
