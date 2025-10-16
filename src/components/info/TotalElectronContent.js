
import { Container, Row } from 'reactstrap'

import L1RangeError from './total-electron-content/L1RangeError'
import L1RangeAnomaly from './total-electron-content/L1RangeAnomaly'
import L1RangeAverage from './total-electron-content/L1RangeAverage'
import L1RangeErrorPacific from './total-electron-content/L1RangeErrorPacific'
import L1RangeAnomalyPacific from './total-electron-content/L1RangeAnomalyPacific'
import L1RangeAveragePacific from './total-electron-content/L1RangeAveragePacific'
import Glotec100asm from './total-electron-content/CTIPeTEC'
import ForecastTEC from './total-electron-content/ForecastTEC'
import SeismicActivity from './total-electron-content/SeismicActivity'

const TotalElectronContent = () => {
    return (
        <>
            <div className="text-center">
                <Container>
                     <Row xs="1" sm="2">
                        <L1RangeError/>
                        <L1RangeAnomaly/>
                    </Row>
                     <Row xs="1" sm="2">
                        <L1RangeAverage/>
                        <L1RangeErrorPacific/>
                    </Row>
                     <Row xs="1" sm="2">
                        <L1RangeAnomalyPacific/>
                        <L1RangeAveragePacific/>
                    </Row>
                     <Row xs="1" sm="2">
                        <ForecastTEC/>
                        <Glotec100asm/>
                    </Row>
                     <Row>
                        <SeismicActivity/>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default TotalElectronContent;
