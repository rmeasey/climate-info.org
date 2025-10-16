import ImageAnimator from "../../ImageAnimator";
const L1RangeAverage = () => {
    const src="https://services.swpc.noaa.gov/products/animations/glotec/ray_urt.json"
    const title="GPS L1 Average F-region Observations"
    return (
        <ImageAnimator src={src} title={title} />
    )
}
export default L1RangeAverage;
