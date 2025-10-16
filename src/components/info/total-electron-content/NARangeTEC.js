import ImageAnimator from "../../ImageAnimator";
const NARangeTEC = () => {
    const src="https://services.swpc.noaa.gov/products/animations/natec.json"
    const title="Stations and Total Electron Content"
    return (
        <ImageAnimator src={src} title={title} />
    )
}
export default NARangeTEC;
