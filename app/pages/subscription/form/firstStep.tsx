import { DeleteOutlined } from '@mui/icons-material'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { Accordion, AccordionDetails, AccordionSummary, Alert, Button, Divider, IconButton, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import * as yup from 'yup'

import { useState } from 'react'
import { InputField } from '../components/inputField'
import { SelectField } from '../components/selectField'
import { cities, countries, options } from '../enum/form'
import { IFirstStep } from '../interfaces/IFirstStep'

export function FirstStep({ onSubmit }: { onSubmit: (data: IFirstStep) => void }) {
  const schema = yup.object().shape({
    cnpj: yup.number().required('cnpj é obrigatório'),
    nomeFantasia: yup.string().required('nome fantasia é obrigatório'),
    cliente: yup.string().required('nome fantasia é obrigatório'),
    nomeContato: yup.string().required('nome contato é obrigatório'),
    telefone: yup.number().required('cnpj é obrigatório'),
    email: yup.string().required('email é obrigatório'),
    cpf: yup.number().required('cnpj é obrigatório'),
    logradouro: yup.string().required('logradouro é obrigatório'),
    numero: yup.number().required('cnpj é obrigatório'),
    complemento: yup.string().required('complemento é obrigatório'),
    bairro: yup.string().required('bairro é obrigatório'),
    pais: yup.string().required('pais é obrigatório'),
    uf: yup.string().required('uf é obrigatório'),
    cidade: yup.string().required('cidade é obrigatório'),
    nome: yup.string().required('nome é obrigatório'),
    cpfRepresentante: yup.number().required('cnpj é obrigatório'),
    emailRepresentante: yup.string().required('email é obrigatório'),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFirstStep>({
    resolver: yupResolver(schema),
  })
  const [contacts, setContacts] = useState([{}])

  function handleAddContact() {
    setContacts([...contacts, {}])
  }

  function handleDeleteContac(index: number) {
    setContacts(contacts.filter((value, position) => position !== index))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Grid container spacing={2} sx={{ paddingTop: '100px' }}>
          <Grid size={5}>
            <InputField label="CNPJ" name="cnpj" type="number" control={control} error={!!errors.cnpj} helperText={errors.cnpj?.message} required />
          </Grid>
          <Grid size={7}>
            <InputField label="Nome Fantasia" name="nomeFantasia" control={control} error={!!errors.nomeFantasia} helperText={errors.nomeFantasia?.message} required />
          </Grid>
        </Grid>

        <Accordion sx={{ marginTop: '25px', bgcolor: '#F8F8F8' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
            Contatos e Endereço
          </AccordionSummary>

          <AccordionDetails>
            <Typography sx={{ color: '#CCCCCC', marginLeft: 1 }}>Contatos</Typography>
            <Divider sx={{ borderColor: '#CCCCCC', marginTop: 1 }} />

            {contacts.map((value, index) => (
              <Grid container spacing={2} alignItems="center" key={index} sx={{ marginBottom: 2, marginTop: 3 }}>
                <Grid size={2}>
                  <SelectField label="cliente" options={options} name={`cliente.${index}`} control={control} />
                </Grid>
                <Grid size={3}>
                  <InputField label="Nome do contato" name={`nomeContato.${index}`} control={control} error={!!errors.nomeContato} helperText={errors.nomeContato?.message} />
                </Grid>
                <Grid size={3}>
                  <InputField label="Telefone" name={`telefone.${index}`} type="number" control={control} error={!!errors.telefone} helperText={errors.telefone?.message} />
                </Grid>
                <Grid size={3}>
                  <InputField label="Email" name={`email.${index}`} control={control} error={!!errors.email} helperText={errors.email?.message} />
                </Grid>
                <Grid size={1}>
                  <IconButton onClick={() => handleDeleteContac(index)}>
                    <DeleteOutlined sx={{ color: '#691F7480' }} />
                  </IconButton>
                </Grid>
              </Grid>
            ))}

            <Button onClick={handleAddContact} variant="outlined" endIcon={<AddBoxOutlinedIcon />} sx={{ color: '#00B9B5', borderColor: '#00B9B5', textTransform: 'initial', marginTop: 3, marginBottom: 3 }}>
              Adicionar novo contato
            </Button>

            <Alert icon={<HelpOutlineIcon sx={{ color: '#00B9B5' }} />} variant="outlined" sx={{ borderColor: '#00B9B5', backgroundColor: '#00B9B51A', color: '#00B9B5' }}>
              Qual a importância desses contatos para o andamento do fluxo onboarding?
            </Alert>

            <Typography sx={{ color: '#CCCCCC', marginLeft: 1, marginTop: 3 }}>Endereço</Typography>
            <Divider sx={{ borderColor: '#CCCCCC', marginTop: 1 }} />

            <Grid container spacing={2} alignItems="center" sx={{ marginBottom: 2, marginTop: 3 }}>
              <Grid size={2.5}>
                <InputField label="CPF" name="cpf" type="number" control={control} error={!!errors.cpf} helperText={errors.cpf?.message} />
              </Grid>
              <Grid size={9.5}>
                <InputField label="Logradouro" name="logradouro" control={control} error={!!errors.logradouro} helperText={errors.logradouro?.message} />
              </Grid>
              <Grid size={3}>
                <InputField label="Número" name="numero" type="number" control={control} error={!!errors.numero} helperText={errors.numero?.message} />
              </Grid>
              <Grid size={3}>
                <InputField label="Complemento" name="complemento" control={control} error={!!errors.complemento} helperText={errors.complemento?.message} />
              </Grid>
              <Grid size={3}>
                <InputField label="Bairro" name="bairro" control={control} error={!!errors.bairro} helperText={errors.bairro?.message} />
              </Grid>
              <Grid size={3}>
                <SelectField label="Pais" options={countries} name="pais" control={control} />
              </Grid>
              <Grid size={6}>
                <SelectField label="UF / Estado" options={cities} name="uf" control={control} />
              </Grid>
              <Grid size={6}>
                <SelectField label="Cidade" options={cities} name="cidade" control={control} />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ marginTop: '25px', bgcolor: '#F8F8F8' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
            Representante Legal
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid size={4}>
                <InputField label="Nome completo" name="nomeContato" control={control} error={!!errors.nomeContato} helperText={errors.nomeContato?.message} />
              </Grid>
              <Grid size={4}>
                <InputField label="CPF" name="cpfRepresentante" type="number" control={control} error={!!errors.cpfRepresentante} helperText={errors.cpfRepresentante?.message} />
              </Grid>
              <Grid size={4}>
                <InputField label="E-mail" name="emailRepresentante" control={control} error={!!errors.emailRepresentante} helperText={errors.emailRepresentante?.message} />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    </form>
  )
}
