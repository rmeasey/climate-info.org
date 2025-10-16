import ImageAnimator from "../../ImageAnimator";
const XRayFluxF10 = () => {
    const src="https://services.swpc.noaa.gov/products/animations/d-rap_f10_global.json"
    const title="X-Ray Flux 10MHz Absorption"
    return (
        <ImageAnimator src={src} title={title} />
    )
}
export default XRayFluxF10;

