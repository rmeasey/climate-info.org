
import ImageAnimator from "../../ImageAnimator";
const L1RangeAnomalyPacific = () => {
    const src="https://services.swpc.noaa.gov/products/animations/glotec/anomalyp_urt.json"
    const title="Pacific Total Electron Content 30 Day Average Difference"
   return (
        <ImageAnimator src={src} title={title} />
    )
}
export default L1RangeAnomalyPacific;
