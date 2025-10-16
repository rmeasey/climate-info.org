
import ImageAnimator from "../../ImageAnimator";
const GloTECAnomaly = () => {
    const src="https://services.swpc.noaa.gov/products/animations/glotec/anomna_urt.json"
    const title="TEC 30 Day Average Difference"
    return (
        <ImageAnimator src={src} title={title} />
    )
}
export default GloTECAnomaly;
