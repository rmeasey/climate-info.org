import ImageAnimator from "../../ImageAnimator";
const L1RangeError = () => {
    const src="https://services.swpc.noaa.gov/products/animations/glotec/100asm_urt.json"
    const title="GPS L1 Range Error from Total Electron Content"
    return (
        <ImageAnimator src={src} title={title} />
    )
}
export default L1RangeError;
