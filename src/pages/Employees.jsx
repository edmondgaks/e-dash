import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective,Page,Search,Inject,Search,Toolbar} from '@syncfusion/ej2-react-grids';
import { employeesData,employeesGrid } from '../data/dummy';
import { Header } from '../components';

const  Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 bg-white rounded-3xl">
      <Header category="Page" title="Employees " />
      <GridComponent dataSource={employeesData} allowPaging allowSorting toolbar={['search']} width="auto">
        <ColumnsDirective> 
          {employeesData.map((item,index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page,Search,Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees