import { Card, CardHeader, CardBody, CardFooter, Col } from 'reactstrap'
import VideoPlayer from '../../VideoPlayer'
const SouthernHemisphere = () => {
    const today = new Date(Date.now())
    const year = today.getFullYear()
    var month = today.getMonth() + 1
    month = month === 13 ? 1 : month
    month = month.toString().length == 1 ? "0" + month.toString() : month.toString()
    //const day = today.getDay().toString().length == 1 ? "0" + today.getDay().toString() : today.getDay().toString()
    const day = "03"
    const src = "https://data.consumer-digital.api.metoffice.gov.uk/models/ovation/forecast/issued/videos/aurora_map_FORECAST_S_" + year + "-" + month + "-" + day + "_0600.mp4"
    const title = "Southern Hemisphere Aurora Forecast"
    return (
        <VideoPlayer src={src} title={title} />
    )
}
export default SouthernHemisphere;
