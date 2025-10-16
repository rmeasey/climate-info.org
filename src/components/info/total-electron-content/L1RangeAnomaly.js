
import ImageAnimator from "../../ImageAnimator";
const L1RangeAnomaly = () => {
    const src="https://services.swpc.noaa.gov/products/animations/glotec/anomaly_urt.json"
    const title="Total Electron Content 30 Day Average Difference"
   return (
        <ImageAnimator src={src} title={title} />
    )
}
export default L1RangeAnomaly;
