import ImageAnimator from "../../ImageAnimator";
const GOESThematic = () => {
    const src="https://services.swpc.noaa.gov/products/animations/suvi-primary-map.json"
    const title="GOES 17 Thematic Map"
    return (
        <ImageAnimator src={src} title={title} width="600" height="480" />
    )
}
export default GOESThematic
