import { Card, CardHeader, CardBody, CardFooter, Col } from 'reactstrap'
import VideoPlayer from '../../VideoPlayer'
const AuroraForecast = () => {
    const src="https://spaceweather.gfz.de/fileadmin/Aurora-Forecast/aurora_forecast_browser.webm"
    const title = "Aurora Forecast"
    return (
        <VideoPlayer src={src} title={title} />
    )
}
export default AuroraForecast;
