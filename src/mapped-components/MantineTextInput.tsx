import {
	useFieldApi,
	UseFieldApiConfig,
} from '@data-driven-forms/react-form-renderer'
import { TextInput } from '@mantine/core'
import React from 'react'

interface MantineTextInputProps extends UseFieldApiConfig {
	label: string
	isRequired: boolean
	customProp?: boolean
}

const MantineTextInput: React.FC<MantineTextInputProps> = (props) => {
	const { input, meta, label, isRequired, customProp, ...rest } =
		useFieldApi(props)

	return (
		<>
			<TextInput
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					marginBottom: 16,
				}}
				withAsterisk={isRequired}
				label={label}
				{...input}
				{...rest}
				error={meta.touched && meta.error ? meta.error : undefined}
			/>
			{customProp && null}
		</>
	)
}

export default MantineTextInput
