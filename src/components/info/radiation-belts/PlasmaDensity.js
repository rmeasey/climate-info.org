import VideoPlayer from '../../VideoPlayer'
const PlasmaDensity = () => {
    const src="https://www.spacepager.eu/fileadmin/Products/WP3/gfz_plasma_video_with_inputs_LAST.mp4"
    const title = "Forecast of the Plasma Density in the Plasmasphere"
    return (
        <VideoPlayer src={src} title={title} />
    )
}
export default PlasmaDensity;
