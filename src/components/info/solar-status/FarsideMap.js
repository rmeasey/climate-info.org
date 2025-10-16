import ImageViewer from "../../ImageViewer";
const FarsideMap = () => {
    const src = "https://www.spaceweatherlive.com//images/GONG/latest.jpg"
    const title = "GONG Calibrated Farside Map"
    return (
        <ImageViewer src={src} title={title} />
    )
}
export default FarsideMap;
