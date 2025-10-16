import ImageViewer from "../../ImageViewer";
const SchumannResonances = () => {
    const src = "https://sos70.ru/provider.php?file=shm.jpg"
    const title = "Schumann Resonances Spectrogram"
    return (
        <ImageViewer src={src} title={title} />
    )
}
export default SchumannResonances;
