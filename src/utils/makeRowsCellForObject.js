import React from 'react'
import { Tooltip } from '@material-ui/core'

export const makeRowCellForObjectValue = (objectItem, rowIndex) => {
  return (
    objectItem.value ? objectItem.value :
      (
        <>
          {objectItem.map((item, index) => (
            <div key={`library-table-row-tooltip-cell-${rowIndex}-4-${index}`}>
              <Tooltip title={item.email} interactive={true}>
                <span>{item.firstname} {item.lastname}</span>
              </Tooltip>
            </div>
          ))}
        </>
      )
    )
}
