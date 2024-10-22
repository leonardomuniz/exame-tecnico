import { MenuItem, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import { ISelectField } from '../interfaces/ISelectField'

export function SelectField({ name, control, label, required = false, options, defaultValue = '' }: ISelectField) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          variant="outlined"
          fullWidth
          select
          label={label}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          required={required}
        >
          {options.map((value, key) => (
            <MenuItem key={key} value={value.label}>
              {value.value}
            </MenuItem>
          ))}
        </TextField>
      )}
    ></Controller>
  )
}
