import { Control } from "react-hook-form";

export interface IInputField {
    name: string;
    control: Control<any>;
    label: string;
    defaultValue?: string;
    type?: string;
    required?: boolean;
    error?: boolean;
    helperText?: string;
}
