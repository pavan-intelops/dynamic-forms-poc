import {
	useFieldApi,
	UseFieldApiConfig,
} from '@data-driven-forms/react-form-renderer'
import { Button } from '@mantine/core'
import React from 'react'

// Extending UseFieldApiConfig for MantineButtonProps to include additional props specific to your button
interface MantineButtonProps extends UseFieldApiConfig {
	label: string // Button text
	variant?: 'filled' | 'outline' | 'light' | 'default' | 'subtle' | 'white' // Button variant
	type?: 'button' | 'submit' | 'reset' | undefined // Button type
	color?: string // Button color
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' // Button size
	isLoading?: boolean // Indicates if the button should show a loading state
}

const MantineButton: React.FC<MantineButtonProps> = (props) => {
	const {
		input,
		label,
		variant = 'filled', // Default variant
		color = '--mantine-color-var(--mantine-color-orange-5)', // Default color
		size = 'md', // Default size
		isLoading = false,
		...rest
	} = useFieldApi(props)

	return (
		<Button
			{...(input as React.ComponentPropsWithoutRef<typeof Button>)}
			{...rest}
			variant={variant}
			color={color}
			size={size}
			loading={isLoading}
		>
			{label}
		</Button>
	)
}

export default MantineButton
