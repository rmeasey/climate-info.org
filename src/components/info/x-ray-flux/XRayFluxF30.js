import ImageAnimator from "../../ImageAnimator";
const XRayFluxF30 = () => {
    const src="https://services.swpc.noaa.gov/products/animations/d-rap_f30_global.json"
    const title="X-Ray Flux 30MHz Absorption"
    return (
        <ImageAnimator src={src} title={title} />
    )
}
export default XRayFluxF30;

