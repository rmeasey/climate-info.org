import { Container, Row } from 'reactstrap'

import SouthernHemisphere from './auroras/SouthernHemisphere'
import NorthernHemisphere from './auroras/NorthernHemisphere'
import AuroraForecast from './auroras/AuroraForecast'
import KPIndex from './auroras/KPIndex'

const Auroras = () => {
    return (
        <>
            <div className="text-center">
                <Container>
                    <Row xs="1" sm="2">
                        <NorthernHemisphere />
                        <SouthernHemisphere />
                    </Row>
                    <Row>
                        <AuroraForecast />
                    </Row>
                    <Row>
                        <KPIndex />
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Auroras;
