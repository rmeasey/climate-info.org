import VideoPlayer from '../../VideoPlayer'
const SDO335 = () => {
    const src = "https://sdo.gsfc.nasa.gov/assets/img/latest/mpeg/latest_1024_0335.mp4"
    const title = "SDO 335Å Wavelength"
    return (
        <VideoPlayer src={src} title={title} />
    )
}
export default SDO335;
