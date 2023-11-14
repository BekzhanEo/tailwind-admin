import type { ReactElement } from 'react'

interface Properties {
	width?: string
	height?: string
}

export default function Loading({
	width = '80px',
	height = '80px'
}: Properties): ReactElement {
	return (
		<div className='empty-table-max-width my-36 flex items-center justify-center'>
			<img
				className='h-20 w-20'
				style={{ width, height }}
				src='/icons/spinner.svg'
				alt='loading'
			/>
		</div>
	)
}
