import React from 'react'

function TableList({ columns, data, loading }) {
  return (
    <table className='table'>
      <thead>
        <tr>
          {columns.map((item, key) => {
            return (
              <th key={key}>{item.title}</th>
            )
          })}
        </tr>
      </thead>
      {
        loading ? "loading" : <tbody>
          {data.map((dataItem, i) => {
            return (
              <tr key={i}>
                {columns.map((columnItem, k) => {
                  return (
                    <td key={k}>{Boolean(columnItem.dataKey) ? dataItem[columnItem.dataKey] : columnItem.render(dataItem)}</td>
                    )
                  })}
              </tr>
            )
          })}
        </tbody>
      }
    </table>
  )
}

export default TableList