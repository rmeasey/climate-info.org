import StockChart from '../../StockChart'

const Electrons = () => {
  const src = "https://services.swpc.noaa.gov/json/goes/primary/differential-electrons-7-day.json"
  const title = "Differential electrons for the last 7 days"

    return (
      <StockChart src={src} title={title} />
    )
}
export default Electrons;

