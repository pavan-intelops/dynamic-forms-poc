import {
	componentTypes,
	Field,
	Schema,
} from '@data-driven-forms/react-form-renderer'

export interface ExtendedSchema extends Schema {
	fields: (Field & {
		type?: 'submit' | 'password' | 'number'
	})[]
}

export const schema: ExtendedSchema = {
	fields: [
		{
			component: componentTypes.TEXT_FIELD,
			name: 'first-name',
			label: 'First name',
			isRequired: true,
			validate: [
				(value: string) =>
					!value || value.length === 0 ? 'Required' : undefined,
			],
			initialValue: 'John',
			customProp: true,
		},
		{
			component: componentTypes.TEXT_FIELD,
			name: 'last-name',
			label: 'Last name',
			isRequired: true,
			validate: [
				(value: string) =>
					!value || value.length === 0 ? 'Required' : undefined,
			],
		},
		{
			component: componentTypes.TEXT_FIELD,
			name: 'email',
			label: 'Enter Email',
			isRequired: true,
			validate: [
				(value: string) => {
					if (!value) {
						return 'Required'
					}
					if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
						return 'Invalid email address'
					}
					return undefined
				},
			],
		},
		{
			component: componentTypes.TEXT_FIELD,
			name: 'password',
			label: 'Enter Password',
			isRequired: true,
			validate: [
				(value: string) => {
					if (!value) {
						return 'Required'
					}
					return undefined
				},
			],
			type: 'password',
		},
		{
			component: componentTypes.TEXT_FIELD,
			name: 'age',
			label: 'Your age',
			type: 'number',
			validate: [
				(value: string) => {
					if (!value) {
						return 'Required'
					}
					if (parseInt(value) < 18) {
						return 'You must be 18 years old or older'
					}
					return undefined
				},
			],
		},
		{
			component: componentTypes.CHECKBOX,
			name: 'terms',
			label: 'I agree to the terms and conditions',
			validate: [
				{
					type: 'required',
					message: 'You must agree to the terms and conditions',
				},
			],
			initialValue: false,
		},
	],
}
