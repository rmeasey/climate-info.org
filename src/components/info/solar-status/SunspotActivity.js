import VideoPlayer from '../../VideoPlayer'
const SunspotActivity = () => {
    const src = "https://jsoc1.stanford.edu/data/hmi/movies/latest/Ic_flat_14d.mp4"
    const title = "SDO Sunspot Activity (Last 14 days)"
    return (
        <VideoPlayer src={src} title={title} />
    )
}
export default SunspotActivity;
