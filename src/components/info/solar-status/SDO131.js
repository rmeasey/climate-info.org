import ImageAnimator from '../../ImageAnimator'
const SDO131 = () => {
    //const src="https://sdo.gsfc.nasa.gov/assets/img/latest/mpeg/latest_1024_0131.mp4"
    const src="https://services.swpc.noaa.gov/products/animations/suvi-secondary-131.json"
    const title = "SDO 131Å Wavelength"
    return (
        // <VideoPlayer src={src} title={title} />
        <ImageAnimator src={src} title={title} height="60" width="60"></ImageAnimator>
    )
}
export default SDO131;
