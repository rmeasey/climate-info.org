import ImageAnimator from "../../ImageAnimator";
const MagnetosphereDensity = () => {
    const src="https://services.swpc.noaa.gov/products/animations/geospace/density.json"
    const title="Global Magnetosphere Density"
    return (
        <ImageAnimator src={src} title={title} />
    )
}
export default MagnetosphereDensity;
