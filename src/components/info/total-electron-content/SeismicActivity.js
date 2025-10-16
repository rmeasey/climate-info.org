import ImageViewer from "../../ImageViewer";
const SeismicActivity = () => {
    const src = "https://volcanodiscovery.de/fileadmin/charts/seismic-activity-level.png"
    const title = "Global Seismic Activity level"
    return (
        <ImageViewer src={src} title={title} />
    )
}
export default SeismicActivity;
