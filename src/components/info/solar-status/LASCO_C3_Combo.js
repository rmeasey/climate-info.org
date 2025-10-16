import VideoPlayer from '../../VideoPlayer'
const LASCO_C3_Combo = () => {
    const src="https://soho.nascom.nasa.gov/data/LATEST/current_c3_combo.mp4"
    const title = "LASCO C3 Combo"
    return (
        <VideoPlayer src={src} title={title} />
    )
}
export default LASCO_C3_Combo;
