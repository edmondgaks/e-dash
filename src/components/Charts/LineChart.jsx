import React from 'react'

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