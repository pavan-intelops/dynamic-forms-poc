import { UseFieldApiConfig } from '@data-driven-forms/react-form-renderer'

export interface MantineTextInputProps extends UseFieldApiConfig {
	label: string
	isRequired: boolean
	customProp?: boolean
}

export interface MantineCheckboxProps extends UseFieldApiConfig {
	label: string
	isRequired: boolean
	customProp?: boolean
}
