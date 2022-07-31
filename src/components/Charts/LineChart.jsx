import React from 'react'
import { ChartComponent,SeriesCollectiveDirective,SeriesDirective,LineSeries,Inject,DateTime,Legend,Tooltip } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries,LinePrimaryYAxis,LinePrimaryXAxis} from '../../data/dummy';
const LineChart = () => {
  return (
    <div>
      <ChartComponent>
        <Inject services={[LineSeries,DateTime,Legend,Tooltip]} />
      </ChartComponent>
    </div>
  )
}

export default LineChart