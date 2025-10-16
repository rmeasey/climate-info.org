import VideoPlayer from '../../VideoPlayer'
const SeafloorAgeMov = () => {
    const src="/movies/sea_floor_age_gray.mp4"
    const title = "Age of the Sea Floor"
    return (
        <VideoPlayer src={src} title={title} />
    )
}
export default SeafloorAgeMov;
