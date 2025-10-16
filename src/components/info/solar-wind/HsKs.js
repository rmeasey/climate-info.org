import VideoPlayer from '../../VideoPlayer'
const HsKs = () => {
    const src = "https://isdc-data.gfz.de/geomagnetism/HpoForecast/v0102/output/obs/Ks_movie.mp4"
    const title = "Ks forecast based on median solar wind forecasts (EUHFORIA, ENLIL, SWPC)"
    return (
        <VideoPlayer src={src} title={title} />
    )
}
export default HsKs;
