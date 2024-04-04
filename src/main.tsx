import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MantineProvider
			defaultColorScheme='dark'
			theme={{
				primaryColor: 'orange',
				primaryShade: 5,
			}}
		>
			<App />
		</MantineProvider>
	</React.StrictMode>
)