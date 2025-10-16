import ImageAnimator from "../../ImageAnimator";
const XRayFluxF15 = () => {
    const src="https://services.swpc.noaa.gov/products/animations/d-rap_f15_global.json"
    const title="X-Ray Flux 15MHz Absorption"
    return (
        <ImageAnimator src={src} title={title} />
    )
}
export default XRayFluxF15;

