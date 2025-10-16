import ImageAnimator from "../../ImageAnimator";
const XRayFluxF05 = () => {
    const src="https://services.swpc.noaa.gov/products/animations/d-rap_f05_global.json"
    const title="X-Ray Flux 500kHz Absorption"
    return (
        <ImageAnimator src={src} title={title} />
    )
}
export default XRayFluxF05;

