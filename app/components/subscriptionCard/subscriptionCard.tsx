'use client'

import { Paper, Typography } from '@mui/material'
import { ISubscriptionCard } from './ISubscriptionCard'

export function SubscripitonCard({ title, number, gradient = false }: ISubscriptionCard) {
  return (
    <Paper
      elevation={3}
      sx={{
        background: gradient ? 'linear-gradient(135deg, #40BFB3 0%, #067775 100%)' : '#fff',
        color: gradient ? '#fff' : '#000',
        border: gradient ? 'none' : '1px solid #ccc',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        textAlign: 'left',
        padding: 2,
        width: '15vw',
        height: 130,
      }}
    >
      <Typography variant="h6" component="h1">
        {title}
      </Typography>
      <Typography variant="h6" component="p">
        {number}
      </Typography>
    </Paper>
  )
}
