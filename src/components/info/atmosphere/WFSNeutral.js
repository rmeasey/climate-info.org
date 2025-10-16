import ImageAnimator from "../../ImageAnimator";
const WFSNeutral = () => {
    const src="https://services.swpc.noaa.gov/products/animations/wam-ipe/neutral.json"
    const title="WAM-IPE WFS Neutral Atmosphere"
    return (
        <ImageAnimator src={src} title={title} />
    )
}
export default WFSNeutral
