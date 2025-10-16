
import { Container, Row } from 'reactstrap'

import XRayFluxGlobal from './x-ray-flux/XRayFluxGlobal'
import XRayFluxF30 from './x-ray-flux/XRayFluxF30'
import XRayFluxF25 from './x-ray-flux/XRayFluxF25'
import XRayFluxF20 from './x-ray-flux/XRayFluxF20'
import XRayFluxF15 from './x-ray-flux/XRayFluxF15'
import XRayFluxF10 from './x-ray-flux/XRayFluxF10'
import XRayFluxF05 from './x-ray-flux/XRayFluxF05'
import AverageFRegion from './x-ray-flux/AverageFRegion'

const XRayFlux = () => {
    return (
        <>
            <div className="text-center">
                <Container>
                    <Row>
                        <XRayFluxGlobal/>
                    </Row>
                    <Row xs="1" sm="2">
                        <XRayFluxF30/>
                        <XRayFluxF25/>
                    </Row>
                    <Row xs="1" sm="2">
                        <XRayFluxF20/>
                        <XRayFluxF15/>
                    </Row>
                    <Row xs="1" sm="2">
                        <XRayFluxF10/>
                        <XRayFluxF05/>
                    </Row>
                    <Row>
                        <AverageFRegion/>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default XRayFlux;
