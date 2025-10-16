import VideoPlayer from '../../VideoPlayer'
const LASCO_C2_Combo = () => {
    const src="https://soho.nascom.nasa.gov/data/LATEST/current_c2_combo.mp4"
    const title = "LASCO C2 Combo"
    return (
        <VideoPlayer src={src} title={title} />
    )
}
export default LASCO_C2_Combo;
