import React from 'react'
import { LIBRARY_ITEM_STYLES } from '../../utils/consts'
import { tableCells } from '../Library/config'
import { makeRowCellForObjectValue } from '../../utils/makeRowsCellForObject'

const TableRows = (props) => {
  const { libraryData } = props

  return (
    <div>
      {libraryData?.map((item, rowIndex) => {
        return (
          <div
            key={`library-table-row-${rowIndex}`}
            style={LIBRARY_ITEM_STYLES}
          >
            {tableCells.map((cell, cellIndex) => (
              <div
                key={`library-table-row-cell-${rowIndex}-${cellIndex}`}
                style={cell.cellStyle}
              >
                {typeof item[cell.title] !== 'object' ? item[cell.title] : makeRowCellForObjectValue(item[cell.title], rowIndex)}
              </div>
            ))}
          </div>
        )
      })}
    </div>)
}

export default TableRows
