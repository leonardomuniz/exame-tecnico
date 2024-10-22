import { Accordion, AccordionDetails, AccordionSummary, Button, IconButton, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { SelectField } from '../components/selectField'
import { automation, features, featuresPrice, plansOptions } from '../enum/form'
import { ISecondStep } from '../interfaces/ISecondStep'

import { DeleteOutlined } from '@mui/icons-material'
import { useState } from 'react'
import * as yup from 'yup'
import { FunctionalityField } from '../components/functionalityField'
import { IFeaturesInfo } from '../interfaces/ISelectField'

export function SecondStep({ onSubmit }: { onSubmit: (data: ISecondStep) => void }) {
  const schema = yup.object().shape({
    planoAssinatura: yup.string().required('plan de assinatura é obrigatório'),
    funcionalidade: yup.string().required('funcionalidade é obrigatório'),
    automacao: yup.string().required('automação é obrigatório'),
  })

  const { control, handleSubmit, getValues } = useForm<ISecondStep>({ resolver: yupResolver(schema) })
  const [functionalities, setFunctionalities] = useState<Array<IFeaturesInfo>>([])
  const [comission, setComission] = useState<number>(0)
  const [totalSubscription, setTotalSubscription] = useState<number>(0)
  const [quantity, setQuantity] = useState<number>(0)

  function handleAddFunctionality() {
    const selectedValue = getValues('funcionalidade')
    const index = parseInt(selectedValue)
    const feature = featuresPrice[index]

    setTotalSubscription(functionalities.length == 0 ? feature.price + 100 : totalSubscription + feature.price)
    setComission(comission + feature.price)

    setFunctionalities([...functionalities, feature])
  }

  function handleDeleteFunctionality(index: number) {
    const feature = functionalities[index]

    setComission(comission - feature.price)
    setTotalSubscription(functionalities.length <= 1 ? feature.price + 100 - totalSubscription : totalSubscription - feature.price)
    setFunctionalities(functionalities.filter((value, position) => position !== index))
  }

  function handleQuantityChange(index: number, value: number) {
    const oldQuantity = quantity
    const difference = value - oldQuantity
    const unityPrice = 16.7

    setQuantity(value)
    setTotalSubscription(totalSubscription + difference * unityPrice)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Grid container spacing={2} sx={{ paddingTop: '100px' }}>
          <Grid size={12}>
            <SelectField label="Plano de assinatura" options={plansOptions} required={true} name="planoAssinatura" control={control} />
          </Grid>
        </Grid>

        <Accordion sx={{ marginTop: '25px', bgcolor: '#F8F8F8' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
            Destaxa Plano UltraPro
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2} alignItems="center" key={1} sx={{ marginBottom: 2, marginTop: 3 }}>
              <Grid size={10}>
                <SelectField label="Selecionar funcionalidade" options={features} name="funcionalidade" control={control} />
              </Grid>
              <Grid size={2}>
                <Button onClick={handleAddFunctionality} variant="outlined" sx={{ borderColor: '#00B9B5', textTransform: 'initial', color: '#00B9B5', fontWeight: 'bolder', height: '42px', marginRight: '10px' }}>
                  Adicionar
                </Button>
              </Grid>
            </Grid>
            {functionalities.map((feature, index) => (
              <Grid container spacing={2} key={index} alignItems="center" sx={{ marginBottom: 2, marginTop: 3 }}>
                <Grid size={11}>
                  <FunctionalityField title={feature.title} subtitle={feature.subtitle} price={feature.price} key={index} onQuantityChange={(event) => handleQuantityChange(index, parseInt(event.target.value))} />
                </Grid>
                <Grid size={1}>
                  <IconButton onClick={() => handleDeleteFunctionality(index)}>
                    <DeleteOutlined sx={{ color: '#691F7480' }} />
                  </IconButton>
                </Grid>
              </Grid>
            ))}

            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginBottom: 2,
                marginTop: 3,
              }}
            >
              <Typography variant="subtitle1">Comissão</Typography>
              <Typography variant="h6" sx={{ color: '#691F74', fontWeight: 'bolder' }}>
                R$ {comission.toFixed(2)}
              </Typography>
              <Typography variant="subtitle1">Total de assinatura</Typography>
              <Typography variant="h6" sx={{ color: '#691F74', fontWeight: 'bolder' }}>
                R$ {totalSubscription.toFixed(2)}
              </Typography>
            </Stack>
          </AccordionDetails>
        </Accordion>

        <Grid container spacing={2} sx={{ marginTop: '25px', marginBottom: '25px' }}>
          <p>Selecione a automação desejada para este cliente:</p>
          <Grid size={12}>
            <SelectField label="Automação" options={automation} name="automacao" control={control} />
          </Grid>
        </Grid>
      </div>
    </form>
  )
}
