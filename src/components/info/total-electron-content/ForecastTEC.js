import VideoPlayer from '../../VideoPlayer'
const ForecastTEC = () => {
    const src = "https://spaceweather.gfz-potsdam.de/fileadmin/SW-Monitor/RC_Forecast_latest.mp4"
    const title = "Electron Ring Current Forecast"
    return (
        <VideoPlayer src={src} title={title}/>
    )
}
export default ForecastTEC;
