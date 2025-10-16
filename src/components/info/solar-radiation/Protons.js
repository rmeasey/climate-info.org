import StockChart from '../../StockChart'

const Protons = () => {
  const src = "https://services.swpc.noaa.gov/json/goes/primary/differential-protons-7-day.json"
  const title = "Differential protons for the last 7 days"
  
  return (
    <StockChart src={src} title={title} />
  )
}
export default Protons;

