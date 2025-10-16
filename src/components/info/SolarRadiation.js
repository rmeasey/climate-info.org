
import { Container, Row } from 'reactstrap'

import XRays from './solar-radiation/XRays'
import Alphas from './solar-radiation/Alphas'
import Protons from './solar-radiation/Protons'
import Electrons from './solar-radiation/Electrons'

const SolarRadiation = () => {
    return (
        <>
            <div className="text-center">               
                <Container>
                    <Row>
                        <XRays />
                    </Row>
                    <Row>
                        <Alphas/>
                    </Row>
                    <Row>
                        <Protons/>
                    </Row>
                    <Row>
                        <Electrons />
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default SolarRadiation;
