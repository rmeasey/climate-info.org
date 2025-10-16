import ImageAnimator from "../../ImageAnimator";
const XRayFluxF25 = () => {
    const src="https://services.swpc.noaa.gov/products/animations/d-rap_f25_global.json"
    const title="X-Ray Flux 25MHz Absorption"
    return (
        <ImageAnimator src={src} title={title} />
    )
}
export default XRayFluxF25;

