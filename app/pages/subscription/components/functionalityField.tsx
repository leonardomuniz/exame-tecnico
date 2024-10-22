import { Box, Chip, TextField, Typography } from '@mui/material'
import { IFeaturesInfo } from '../interfaces/ISelectField'

export function FunctionalityField({ price, subtitle, title, onQuantityChange }: IFeaturesInfo) {
  return (
    <Box sx={{ border: '2px solid #00B9B533', borderRadius: 1, padding: 2, display: 'flex', justifyContent: 'space-between' }}>
      <Box display="flex" alignItems="center">
        <Box marginRight={2}>
          <Typography variant="caption">{subtitle}</Typography>
          <Typography variant="h5" sx={{ fontWeight: 'bolder' }}>
            {title}
          </Typography>
        </Box>
        <Chip label="Clico 1" sx={{ bgcolor: '#00B9B51A', color: '#00B9B5' }} />
      </Box>
      <Box display="flex" alignItems="center">
        {title === 'PDV adicional' && (
          <Box display="flex" alignItems="center" marginRight={2} gap={2}>
            <TextField type="number" inputProps={{ min: 1, max: 99 }} variant="outlined" sx={{ width: '50px', marginRight: 1 }} onChange={onQuantityChange} />
            <Box display="flex" flexDirection="column" alignItems="flex-end">
              <Typography variant="caption" sx={{ color: '#00B9B5' }}>
                Unidade
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bolder' }}>
                R$ 16,70
              </Typography>
            </Box>
          </Box>
        )}
        <Box textAlign="right">
          <Typography variant="caption" sx={{ color: '#00B9B5' }}>
            Total
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bolder' }}>
            R$ {price}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
