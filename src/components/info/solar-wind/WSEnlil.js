import ImageAnimator from "../../ImageAnimator";
const WSEnlil = () => {
    const src="https://services.swpc.noaa.gov/products/animations/enlil.json"
    const title="WSA-ENLIL Prediction"
    return (
        <ImageAnimator src={src} title={title} />
    )
}
export default WSEnlil;
