import ImageViewer from "../../ImageViewer";
const CurrentTEC = () => {
    const src="https://www.swpc.noaa.gov/sites/default/files/styles/medium/public/Total%20Electron%20Content.png?itok=n_FFU0JM"
    const title="Current Total Electron Content"
    return (
        <ImageViewer src={src} title={title} />
    )
}
export default CurrentTEC;
