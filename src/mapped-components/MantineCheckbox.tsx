import { useFieldApi } from '@data-driven-forms/react-form-renderer'
import { Checkbox } from '@mantine/core'
import { MantineCheckboxProps } from './types'
import { useEffect, useState } from 'react'

const MantineCheckbox = (props: MantineCheckboxProps) => {
	const { input, meta, label, isRequired, ...rest } = useFieldApi(props)
	const [isChecked, setIsChecked] = useState(input.checked || false)
	// const form = useFormApi()
	useEffect(() => {
		console.log('isChecked: ', isChecked)
		if (isChecked === true) {
			input.onChange(true)
			input.value = true
		} else {
			input.onChange(false)
			input.value = false
		}
	}, [isChecked])

	return (
		<Checkbox
			styles={{
				root: {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					marginBottom: 16,
				},
			}}
			// {...input}
			{...rest}
			checked={isChecked}
			onChange={() => {
				setIsChecked((p) => !p)
				// input.onChange(!input.checked)
			}}
			required={isRequired}
			label={label}
			error={meta.touched && meta.error ? meta.error : undefined}
		/>
	)
}

export default MantineCheckbox
