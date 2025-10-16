import VideoPlayer from '../../VideoPlayer'
const SDO211 = () => {
    const src="https://sdo.gsfc.nasa.gov/assets/img/latest/mpeg/latest_1024_0211.mp4"
    const title = "SDO 193Å Wavelength"
    return (
        <VideoPlayer src={src} title={title} />
    )
}
export default SDO211;
