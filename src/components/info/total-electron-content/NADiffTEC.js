import ImageAnimator from "../../ImageAnimator";
const NADiffTEC = () => {
    const src="https://services.swpc.noaa.gov/products/animations/natec-dif.json"
    const title="Difference in Total Electron Content from 10 day average"
    return (
        <ImageAnimator src={src} title={title} />
    )
}
export default NADiffTEC;
