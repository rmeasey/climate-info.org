import VideoPlayer from '../../VideoPlayer'
const SDO171 = () => {
    const src="https://sdo.gsfc.nasa.gov/assets/img/latest/mpeg/latest_1024_0171.mp4"
    const title = "SDO 171Å Wavelength"
    return (
        <VideoPlayer src={src} title={title} />
    )
}
export default SDO171;
