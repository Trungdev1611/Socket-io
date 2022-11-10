import { TextField } from '@mui/material'
import React from 'react'

const InputField = ({label, type, variant, sx}) => {
  return (
 
          <TextField
          label={label}
          type= {type}
          variant= {variant}
          sx = {sx}
        />
  )
}

export default InputField
