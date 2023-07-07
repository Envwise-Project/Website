import DataTable from "react-data-table-component";
import  style  from "../Aboutproperty.module.scss"
  
const TableIncome = ({passiveIncomePerYear, investment}) => {
  const columns = [
    {
      name: '',
      selector: 'rowHeader',
      width: '150px',
      cell: row => <div>{row.rowHeader}</div>,
    },
    {
      name: 'Year 5',
      selector: 'column1',      
      cell: row => <div>{row.column1}</div>
    },
    {
      name: 'Year 10',
      selector: 'column2',      
      cell: row => <div>{row.column2}</div>
    },
    {
      name: 'Year 15',
      selector: 'column3',      
      cell: row => <div>{row.column3}</div>
    },
    
  ];

  const data = [
    { rowHeader: 'Cumulative Gain', column1:"$" + (passiveIncomePerYear * 5)
    , column2: "$" + (passiveIncomePerYear * 10), column3: "$" + (passiveIncomePerYear * 15) },
    { rowHeader: 'Investment', column1: "$" + investment, column2:"$" + investment, column3: "$" + investment },
    // Agregar más filas acá
  ];

  return (
    <DataTable      
      columns={columns}
      data={data}
      defaultSortField="rowHeader"
      pagination={false}
    />
  );
};


export default TableIncome;



    
