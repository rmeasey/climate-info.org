import ImageAnimator from "../../ImageAnimator";
const CTIPeTEC = () => {
    const src="https://services.swpc.noaa.gov/products/animations/ctipe-tec.json"
    const title="CTIPe Total Electron Content"
    return (
        <ImageAnimator src={src} title={title} />
    )
}
export default CTIPeTEC;
