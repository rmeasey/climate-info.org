import VideoPlayer from '../../VideoPlayer'
const MagneticActivity = () => {
    const src = "https://jsoc1.stanford.edu/data/hmi/movies/latest/M_color_14d.mp4"
    const title = "SDO/HMI Magnetogram (Last 14 days)"
    return (
        <VideoPlayer src={src} title={title} />
    )
}
export default MagneticActivity;
