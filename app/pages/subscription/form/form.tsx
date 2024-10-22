import { useState } from 'react'

import { IActiveStep } from '../interfaces/IActiveStep'
import { IFirstStep } from '../interfaces/IFirstStep'
import { ISecondStep } from '../interfaces/ISecondStep'
import { FirstStep } from './firstStep'
import { SecondStep } from './secondStep'

export function FormSubscription({ activeStep }: IActiveStep) {
  const [firstStep, setFirstSetp] = useState<IFirstStep | null>(null)
  const [secondStep, setSecondStep] = useState<ISecondStep | null>(null)

  function handleFirstStep(data: IFirstStep) {
    setFirstSetp(data)
  }

  function handleSecondStep(data: ISecondStep) {
    setSecondStep(data)
  }

  if (firstStep && secondStep) {
    console.log({ ...firstStep, ...secondStep })
  }

  function getFormPage(activeStep: number) {
    switch (activeStep) {
      case 1:
        return <FirstStep onSubmit={handleFirstStep} />
      case 2:
        return <SecondStep onSubmit={handleSecondStep} />
    }
  }

  return getFormPage(activeStep)
}
