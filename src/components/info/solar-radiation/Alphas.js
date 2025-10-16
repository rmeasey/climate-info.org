import StockChart from '../../StockChart'

const Alphas = () => {
  const src = "https://services.swpc.noaa.gov/json/goes/primary/differential-alphas-7-day.json"
  const title = "Differential alphas for the last 7 days"
  
  return (
    <StockChart src={src} title={title} />
  )
}
export default Alphas;

