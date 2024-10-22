'use client'
import { Box, Container, StepIconProps, StepLabel, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid2'
import Step from '@mui/material/Step'
import Stepper from '@mui/material/Stepper'
import Image from 'next/image'

import { Fragment, ReactNode, useState } from 'react'
import imageBackGround from '../../assets/f4371935bdf675c40a327b63465e998b.jpeg'
import { FormSubscription } from './form/form'

export default function Subscripiton() {
  const steps = ['Dados do cliente', 'Plano de assinatura', 'Credenciadora e Roteamento', 'Gestão de Usuário']

  const [activeStep, setActiveStep] = useState(0)
  const [skipped, setSkipped] = useState(new Set<number>())

  function isStepSkipped(step: number) {
    return skipped.has(step)
  }

  function handleNext() {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  function handleReset() {
    setActiveStep(0)
  }

  function CustomStepIcon(props: StepIconProps) {
    const { active, completed } = props
    return (
      <div
        style={{
          color: completed ? '#691F74' : 'rgba(105, 31, 116, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          boxShadow: active ? '0 0 10px 5px #00B9B533' : '0 0 5px 2px #00B9B533',
        }}
      >
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: '50%',
            backgroundColor: 'currentColor',
          }}
        />
      </div>
    )
  }

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} sx={{ paddingTop: '100px' }}>
        <Grid size={7}>
          <Box sx={{ padding: 2 }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
              Nova Assinatura
            </Typography>

            <Typography variant="body1">Complete o cadastro para avançarmos com sua assinatura. </Typography>

            <Box sx={{ width: '100%', paddingTop: '70px' }}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => {
                  const stepProps: { completed?: boolean } = {}
                  const labelProps: {
                    optional?: ReactNode
                  } = {}
                  if (isStepSkipped(index)) {
                    stepProps.completed = false
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps} StepIconComponent={CustomStepIcon}>
                        {label}
                      </StepLabel>
                    </Step>
                  )
                })}
              </Stepper>

              <div>
                <FormSubscription activeStep={activeStep + 1} />
                <Fragment>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    {activeStep === steps.length ? (
                      <Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                          <Box sx={{ flex: '1 1 auto' }} />
                          <Button onClick={handleReset}>Reset</Button>
                        </Box>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                          {activeStep !== 0 ? (
                            <Button
                              variant="outlined"
                              onClick={handleBack}
                              sx={{
                                borderColor: '#00B9B5',
                                textTransform: 'initial',
                                color: '#00B9B5',
                                width: '150px',
                                marginRight: '10px',
                              }}
                            >
                              Voltar
                            </Button>
                          ) : (
                            ''
                          )}

                          <Box sx={{ flex: '1 1 auto' }} />
                          <Button
                            onClick={handleNext}
                            sx={{
                              bgcolor: '#00B9B5',
                              fontWeight: 'bolder',
                              textTransform: 'initial',
                              width: '150px',
                              color: '#FFF',
                            }}
                          >
                            {activeStep === steps.length - 1 ? 'Enviar' : 'Continuar'}
                          </Button>
                        </Box>
                      </Fragment>
                    )}
                  </Box>
                </Fragment>
              </div>
            </Box>
          </Box>
        </Grid>

        <Grid size={5}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
              sx={{
                position: 'relative',
                width: '75%',
                paddingTop: '110%',
                overflow: 'hidden',
                borderRadius: 1,
              }}
            >
              <Image src={imageBackGround} alt="imagem promocional" fill style={{ objectFit: 'cover', objectPosition: 'right' }} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" priority />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
