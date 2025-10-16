import VideoPlayer from '../../VideoPlayer'
const Forecast = () => {
    const src = "https://www.spacepager.eu/fileadmin/Products/WP2/slice_history.mp4"
    const title = "Solar Wind Forecast using real-time CME Alerts"
    return (
        <VideoPlayer src={src} title={title} />
    )
}
export default Forecast;
