import ImageAnimator from "../../ImageAnimator";
const AverageFRegion = () => {
    const src="https://services.swpc.noaa.gov/products/animations/glotec/ray_urt.json"
    const title="X-Ray Average F-Region Observation"
    return (
        <ImageAnimator src={src} title={title} />
    )
}
export default AverageFRegion;

