import { useFieldApi } from '@data-driven-forms/react-form-renderer'
import { PasswordInput, TextInput } from '@mantine/core'
import { MantineTextInputProps } from './types'

const MantineTextInputFactory: React.FunctionComponent<
	MantineTextInputProps
> = (props) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { input, meta, label, isRequired, customProp, type, ...rest } =
		useFieldApi(props)

	if (type === 'password') {
		return (
			<PasswordInput
				styles={{
					root: {
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						marginBottom: 16,
					},
					wrapper: {
						width: '100%',
					},
				}}
				withAsterisk={isRequired}
				w={'100%'}
				label={label}
				{...input}
				{...rest}
				error={meta.touched && meta.error ? meta.error : undefined}
			/>
		)
	}
	return (
		<TextInput
			w={'100%'}
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
	)
}

export default MantineTextInputFactory
