import ImageAnimator from "../../ImageAnimator";
const MagnetosphereVelocity = () => {
    const src="https://services.swpc.noaa.gov/products/animations/geospace/velocity.json"
    const title="Global Magnetosphere Velocity"
    return (
        <ImageAnimator src={src} title={title} />
    )
}
export default MagnetosphereVelocity;
