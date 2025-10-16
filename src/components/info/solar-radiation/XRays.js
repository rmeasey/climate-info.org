import StockChart from '../../StockChart'

const XRays = () => {
  const src = "https://services.swpc.noaa.gov/json/goes/primary/xray-flares-7-day.json"
  const title = "Xray flares for the last 7 days"

  return (
    <StockChart src={src} title={title} />
  )
}
export default XRays;

