import {
	FormTemplateRenderProps,
	type ComponentMapper,
} from '@data-driven-forms/react-form-renderer/common-types'
import componentTypes from '@data-driven-forms/react-form-renderer/component-types'
import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer'
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api'
import { useState } from 'react'
import MantineButton from './mapped-components/MantineButton'
import MantineTextInput from './mapped-components/MantineTextInput'
import { schema } from './schema'
import { Button } from '@mantine/core'

const FormTemplate = ({ formFields }: FormTemplateRenderProps) => {
	const { handleSubmit, onCancel } = useFormApi()
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault()
				handleSubmit()
			}}
		>
			<>{formFields}</>
			<Button type='submit' variant='primary'>
				Submit
			</Button>
			<Button type='button' variant='outline' onClick={onCancel}>
				Cancel
			</Button>
		</form>
	)
}

const componentMapper: ComponentMapper = {
	[componentTypes.TEXT_FIELD]: MantineTextInput,
	[componentTypes.BUTTON]: MantineButton,
}
const ComponentMapper = () => {
	const [values, setValues] = useState({})

	return (
		<div>
			<FormRenderer
				componentMapper={componentMapper}
				FormTemplate={FormTemplate}
				schema={schema}
				onSubmit={(values) => setValues(values)}
				onCancel={() => console.log('cancel action')}
			/>
			<pre>{JSON.stringify(values, null, 2)}</pre>
		</div>
	)
}

export default ComponentMapper
