import React from 'react'
import { ChartComponent,SeriesCollectionDirective,SeriesDirective,LineSeries,Inject,DateTime,Legend,Tooltip } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries,LinePrimaryYAxis,LinePrimaryXAxis} from '../../data/dummy';
const LineChart = () => {
  return (
    <div>
      <ChartComponent>
        <Inject services={[LineSeries,DateTime,Legend,Tooltip]} />
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item,index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}


export default LineChart