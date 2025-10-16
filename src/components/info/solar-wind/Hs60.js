import VideoPlayer from '../../VideoPlayer'
const Hs60 = () => {
    const src = "https://isdc-data.gfz.de/geomagnetism/HpoForecast/v0102/output/obs/Hs60_movie.mp4"
    const title = "Hs60 forecast based on median solar wind forecasts (EUHFORIA, ENLIL, SWPC)"
    return (
        <VideoPlayer src={src} title={title} />
    )
}
export default Hs60;
