import React from 'react'
import { TextField } from '@material-ui/core'
import { FILTER_PLACEHOLDER, FILTER_STYLES } from '../../utils/consts'

export const FilterInput = (props) => {
 const { filterValue, setFilterValue} = props;

  return (
    <TextField
      onChange={(e) => {
        setFilterValue(e.target.value);
      }}
      value={filterValue}
      placeholder={FILTER_PLACEHOLDER}
      style={FILTER_STYLES}
    />
  )
};
