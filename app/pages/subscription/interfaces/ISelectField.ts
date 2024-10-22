import { ChangeEvent } from "react"
import { Control } from "react-hook-form"

export interface ISelectField {
    name: string
    label: string
    options: ISelectOptions[]
    required?: boolean
    control: Control<any>
    defaultValue?: string
}

export interface ISelectOptions {
    label: string
    value: string
}

export interface IFeaturesInfo {
    title: string
    subtitle: string
    price: number
    onQuantityChange: (event: ChangeEvent<HTMLInputElement>) => void 
}