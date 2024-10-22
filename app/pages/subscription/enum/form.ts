import { IFeaturesInfo, ISelectOptions } from '../interfaces/ISelectField'

export const options: ISelectOptions[] = [
  { label: 'Responsável', value: 'Responsável' },
  { label: 'Comercial', value: 'Comercial' },
  { label: 'Financeiro', value: 'Financeiro' },
  { label: 'Suporte', value: 'Suporte' },
]
export const countries: ISelectOptions[] = [{ label: 'Brasil', value: 'Brasil' }]
export const cities: ISelectOptions[] = [{ label: 'São Paulo', value: 'São Paulo' }]

export const plansOptions: ISelectOptions[] = [{ label: 'Destaxa Plano UltraPro', value: 'Destaxa Plano UltraPro' }]
export const features: ISelectOptions[] = [
  { label: '0', value: 'TEF Padrão 1º PDV' },
  { label: '1', value: 'PDV adicional' },
  { label: '2', value: 'Conciliação' },
  { label: '3', value: 'PIX' },
]

export const featuresPrice: IFeaturesInfo[] = [
  {  title: 'TEF Padrão 1º PDV', subtitle: 'TEF Padrão', price: 30.70 },
  {  title: 'PDV adicional', subtitle: 'PDV adicional', price: 30.70 },
  {  title: 'Conciliação', subtitle: 'Conciliação', price: 30.70 },
  {  title: 'PIX', subtitle: 'PIX', price: 30.70 },
]

export const automation: ISelectOptions[] = [{ label: '1', value: 'Automação Y' }]
