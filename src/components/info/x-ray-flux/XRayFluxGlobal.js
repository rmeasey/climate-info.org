import ImageAnimator from "../../ImageAnimator";
const XRayFluxGlobal = () => {
    const src="https://services.swpc.noaa.gov/products/animations/d-rap_global.json"
    const title="X-Ray Flux"
    return (
        <ImageAnimator src={src} title={title} />
    )
}
export default XRayFluxGlobal;

