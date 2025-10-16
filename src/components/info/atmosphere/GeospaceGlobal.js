import ImageAnimator from "../../ImageAnimator";
const GeospaceGlobal = () => {
    const src="https://services.swpc.noaa.gov/products/animations/geospace/global.json"
    const title="Geospace Global"
    return (
        <ImageAnimator src={src} title={title} />
    )
}
export default GeospaceGlobal;
