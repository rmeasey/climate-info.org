import { useState, useEffect } from 'react'
import {Card, CardHeader, CardBody, CardFooter} from 'reactstrap'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';

const StockChart = ({src, title}) => {
    const defaultChart = { rangeSelector: {selected: 2}, series: [{name:"Flux"}, {data: []}], xAxis: { categories: [],  labels: {enabled: true,}, dataLabels: {enabled: true,}} }

    const [chartOptions, setChartOptions] = useState({defaultChart})
    const [isLoading, setIsLoading] = useState(true)

    const processData = (data) => {
        var ydata = []
        var yref = []
        const isXray = data.some(item => "max_xrlong" in item);
        if (isXray) {
            ydata = data.map(json => [json.time_tag, json.max_xrlong])
            yref = data.map(json => json.max_class)
        } else {
            ydata = data.map(json => [json.time_tag, json.flux])
            yref = data.map(json => json.energy)
        }
        var localChartOptions = chartOptions.defaultChart
        localChartOptions.series[0].data = ydata
        localChartOptions.xAxis.categories = yref
        return localChartOptions 
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
    <>
        {isLoading ? <p>Loading data...</p> :
            <Card>
                <CardHeader>
                    <h3>{title}</h3>
                </CardHeader>
                <CardBody>
                    <HighchartsReact
                        highcharts={Highcharts}
                        constructorType={'stockChart'}
                        options={chartOptions}
                    />
                </CardBody>
            </Card>

        }
    </>
    )
}

export default StockChart;