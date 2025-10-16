import VideoPlayer from '../../VideoPlayer'
const RealTimeRB = () => {
    const src="https://www.spacepager.eu/fileadmin/Products/WP6/Forecast_UTC_E_1_MeV_PA_50_latest_mean_ensemble.mp4"
    const title = "Real-Time Radiation Belts (past 7 days)"
    return (
        <VideoPlayer src={src} title={title} />
    )
}
export default RealTimeRB;
