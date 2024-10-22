import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import { IInputField } from '../interfaces/IInputField'

export function InputField({ name, control, label, defaultValue = '', type = 'text', required = false, error = false, helperText = '' }: IInputField) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          fullWidth
          id="outlined-basic"
          required={required}
          type={type}
          error={error}
          helperText={helperText}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
      )}
    />
  )
}
