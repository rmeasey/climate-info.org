import ImageAnimator from "../../ImageAnimator";
const MagnetospherePressure = () => {
    const src="https://services.swpc.noaa.gov/products/animations/geospace/pressure.json"
    const title="Global Magnetosphere Pressure"
    return (
        <ImageAnimator src={src} title={title} />
    )
}
export default MagnetospherePressure;
