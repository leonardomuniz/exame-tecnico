'use client'

import AddIcon from '@mui/icons-material/Add'
import SearchIcon from '@mui/icons-material/Search'

import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import { Box, Button, Container, CssBaseline, FormControl, InputAdornment, InputLabel, MenuItem, Pagination, Select, SelectChangeEvent, Stack, TextField } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { Fragment, useState } from 'react'
import { SubscripitonCard } from './components/subscriptionCard/subscriptionCard'
import { TableComponent } from './pages/table/page'

export default function Home() {
  const [itensPerPage, setItensPerPage] = useState<string>('10')
  const handleChange = (event: SelectChangeEvent) => {
    setItensPerPage(event.target.value)
  }

  const data = {
    rows: [
      {
        data: '01/01/2023',
        assinatura: 'Premium',
        nome: 'Empresa Exemplo',
        cnpj: '00.000.000/0000-00',
        contato: '(11) 99999-9999',
        email: 'contato@empresaexemplo.com',
        ultimaTransacao: '15/12/2022',
        status: 'Ativo',
        acao: 'Editar/Deletar',
      },
    ],
    cells: ['Data', 'Assinatura', 'Nome Fantasia', 'CNPJ', 'Contato', 'E-mail', 'Última transação', 'Status', 'Ação'],
  }

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={1}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '100px',
            padding: '20px 0px',
          }}
        >
          <h1 style={{ margin: 0 }}>Minhas assinaturas</h1>
          <Button variant="contained" startIcon={<AddIcon />} href="/pages/subscription" sx={{ bgcolor: '#00B9B5', fontWeight: 'bolder', textTransform: 'initial' }}>
            Nova assinatura
          </Button>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            padding: '20px 0',
            '& > *': {
              flex: '1 1 calc(20% - 16px)',
              minWidth: '200px',
            },
          }}
        >
          <SubscripitonCard title="Onboarding em andamento com time Destaxa" number={12} gradient />
          <SubscripitonCard title="Assinaturas Ativas" number={45} />
          <SubscripitonCard title="Assinaturas Canceladas" number={45} />
          <SubscripitonCard title="Assinaturas Declinadas" number={45} />
          <Box sx={{ flex: '1 1 calc(20% - 16px)' }} />
        </Stack>

        <h1 style={{ margin: 0, paddingTop: '100px' }}>Relatório de assinaturas</h1>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          sx={{
            height: '44px',
            marginBottom: '25px',
          }}
        >
          <Grid size={10}>
            <Box display="flex" alignItems="center" gap={2}>
              <TextField
                placeholder="Buscar por CNPJ/nome fantasia"
                variant="outlined"
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                sx={{ height: '44px', width: '40%' }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon sx={{ color: '#691F7480' }} />
                    </InputAdornment>
                  ),
                  sx: { height: '44px' },
                }}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['SingleInputDateRangeField']}>
                  <DateRangePicker
                    slots={{ field: SingleInputDateRangeField }}
                    slotProps={{
                      textField: {
                        size: 'small',
                        InputProps: {
                          endAdornment: (
                            <InputAdornment position="start">
                              <CalendarTodayIcon sx={{ color: '#691F7480' }} />
                            </InputAdornment>
                          ),
                          sx: { height: '44px', marginTop: 0 },
                        },
                        sx: { height: '52px' },
                      },
                    }}
                    name="allowedRange"
                    format="DD/MM"
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Box>
          </Grid>
          <Grid size={2} container justifyContent="flex-end">
            <Button
              variant="contained"
              sx={{
                bgcolor: '#00B9B5',
                fontWeight: 'bolder',
                textTransform: 'initial',
                height: '100%',
                mb: 1,
              }}
            >
              Exportar
            </Button>
          </Grid>
        </Grid>

        <TableComponent rows={data.rows} cells={data.cells} />

        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} sx={{ mt: 2 }}>
          <FormControl variant="outlined" sx={{ minWidth: 200 }}>
            <InputLabel id="select-label">Quantidade de itens por página</InputLabel>
            <Select labelId="select-label" id="select" onChange={handleChange} label="Quantidade de itens por página" defaultValue={itensPerPage}>
              <MenuItem value="10">10 de {data.rows.length}</MenuItem>
              <MenuItem value="20">20 de {data.rows.length}</MenuItem>
              <MenuItem value="30">30 de {data.rows.length}</MenuItem>
            </Select>
          </FormControl>

          <Pagination count={Math.ceil(data.rows.length / parseInt(itensPerPage))} variant="outlined" shape="rounded" />
        </Stack>
      </Container>
    </Fragment>
  )
}
