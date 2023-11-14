/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import App from 'app/App'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { registerSW } from 'virtual:pwa-register'
import './index.css'

registerSW()

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.querySelector('#root')
)
