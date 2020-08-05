import React from 'react'
import { CURSORS, TABLE_HEADER_SPAN_STYLES, TABLE_HEADER_STYLES } from '../../utils/consts'
import { tableCells } from '../Library/config'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

const TableHeader = (props) => {
  const { sortParameters, setSortParameters } = props
  return (
    <div style={TABLE_HEADER_STYLES}>
      {tableCells.map((item, headerCellIndex) => (
        <div
          style={{ ...item.cellStyle, cursor: item.isSortable ? CURSORS.pointer : CURSORS.auto }}
          key={`library-table-header-${headerCellIndex}`}
          onClick={(e) => {
            e.stopPropagation()
            item.isSortable && setSortParameters({
              field: item.title,
              order: sortParameters.order === 'asc' ? 'desc' : 'asc'
            })
          }}
        >
          {item.headerTitle}
          <span style={TABLE_HEADER_SPAN_STYLES}>
              {sortParameters.field === item.title ? (
                sortParameters.order === 'asc' ? <ArrowUpwardIcon/> : <ArrowDownwardIcon/>
              ) : ''}
            </span>
        </div>
      ))}
    </div>
  )
}

export default TableHeader
