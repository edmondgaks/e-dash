import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip} from '@syncfusion/ej2-react-charts';

const SparkLine = ({ id,height,width,color,data,type,currentColor}) => {
  return (
    // <div></div> 
    <SparklineComponent id={id} height={height} width={width} fill={color} lineWidth={1} valueType="Numeric" border={{color: currentColor, width: 2}} dataSource={data} xName="x" yName="y" type={type} tooltipSettings={{ visible: true, format: '${x}: data ${y}',trackLineSettings: {
      visible: true
    }}}>
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLine