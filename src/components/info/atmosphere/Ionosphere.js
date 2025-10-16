import ImageAnimator from "../../ImageAnimator";
const Ionosphere = () => {
    const src="https://services.swpc.noaa.gov/products/animations/wam-ipe/ionosphere.json"
    const title="Global Ionosphere"
    return (
        <ImageAnimator src={src} title={title} />
    )
}
export default Ionosphere;
