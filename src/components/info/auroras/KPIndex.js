import { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from 'reactstrap'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Reference from '../../Reference'

const KPIndex = () => {
  const src = "https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json"
  const title = "KP Index for the last 7 days"
  const defaultChart = {
    chart: {
      type: "column"
    },
    title: {
      text: title
    },
    series: [
      {
        type: "column",
        data: [],
        zones: []
      }
    ],
    xAxis: {
      categories: []
    }
  };

  const [chartOptions, setChartOptions] = useState({defaultChart});
  const [isLoading, setIsLoading] = useState(true);

  // Data raw format is an array of records with the header: ["time_tag","Kp","a_running","station_count"]
  const processData = (data) => {
    var categories = []
    var ydata = []
    for (let i = 1; i < data.length; i++) {
        categories.push(data[i][0].substring(0, 13))
        ydata.push(Number(data[i][1]))
    }
    const rtn = {chart: { type:"column"}, title: { text: title }, series: [{name: 'KP Index', data: ydata, zones: [{ value: 5, color: '#92D050' }, { value: 6, color: '#F6EB14' },{ value: 7, color: '#FFC800' },{ value: 8, color: '#FF9600' },{ value: 9, color: '#FF0000' },{ value: 10, color: '#C80000' },{ color: '#92D050' }]}], xAxis: { categories: categories,  labels: {enabled: true,}, dataLabels: {enabled: true,}} }
    return rtn 
  }

  useEffect(() => {
    fetch(src)
      .then(response => response.json())
      .then(data => {
        setChartOptions(processData(data));
        setIsLoading(false);
      });
  }, []);
    return (      
      <Card>
        <CardHeader>
          <h3>{title}</h3>
            <Reference title={title}/>
        </CardHeader>
        <CardBody>
          <table className="scales_table">

          <tbody><tr>
          <th className="noaa_scale_bg_0">Kp &lt; 5</th>
          <th className="noaa_scale_bg_1">Kp = 5 (G1)</th>       
          <th className="noaa_scale_bg_2">Kp = 6 (G2)</th>
          <th className="noaa_scale_bg_3">Kp = 7 (G3)</th>
          <th className="noaa_scale_bg_4">Kp = 8, 9- (G4)</th>
          <th className="noaa_scale_bg_5">Kp = 9o (G5)</th>
          </tr>
          </tbody>
          </table>
          {isLoading ? <p>Loading data...</p> :
          <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
          />
            }
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    )
}
export default KPIndex;

