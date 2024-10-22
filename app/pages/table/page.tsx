import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import EditIcon from '@mui/icons-material/Edit'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { IData } from './interfaces/IData'

export function TableComponent({ rows, cells }: IData) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="custom table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#F8F8F8' }}>
            {cells.map((cell, index) => (
              <TableCell key={index}>{cell}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} sx={{ backgroundColor: index % 2 ? '#FFF' : '#F8F8F8' }}>
              <TableCell>{row.data}</TableCell>
              <TableCell>{row.assinatura}</TableCell>
              <TableCell>{row.nome}</TableCell>
              <TableCell>{row.cnpj}</TableCell>
              <TableCell>{row.contato}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.ultimaTransacao}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>
                <IconButton aria-label="add" color="primary">
                  <AddCircleOutlineIcon sx={{ color: '#691F7480' }} />
                </IconButton>
                <IconButton aria-label="edit" color="primary">
                  <EditIcon sx={{ color: '#691F7480' }} />
                </IconButton>
                <IconButton aria-label="delete" color="secondary">
                  <HighlightOffIcon sx={{ color: '#691F7480' }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
