import VideoPlayer from '../../VideoPlayer'
const SDO304 = () => {
    const src = "https://sdo.gsfc.nasa.gov/assets/img/latest/mpeg/latest_1024_0304.mp4"
    const title = "SDO 304Å Wavelength"
    return (
        <VideoPlayer src={src} title={title} />
    )
}
export default SDO304;
