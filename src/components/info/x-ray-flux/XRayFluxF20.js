import ImageAnimator from "../../ImageAnimator";
const XRayFluxF20 = () => {
    const src="https://services.swpc.noaa.gov/products/animations/d-rap_f20_global.json"
    const title="X-Ray Flux 20MHz Absorption"
    return (
        <ImageAnimator src={src} title={title} />
    )
}
export default XRayFluxF20;

