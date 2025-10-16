
import ImageAnimator from "../../ImageAnimator";
const GloTECRange = () => {
    const src="https://services.swpc.noaa.gov/products/animations/glotec/100na_urt.json"
    const title="Total Electron Content Range Error"
    return (
        <ImageAnimator src={src} title={title} />
    )
}
export default GloTECRange;
