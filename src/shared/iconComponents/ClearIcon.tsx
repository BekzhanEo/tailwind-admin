/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { ReactElement, HTMLAttributes } from 'react'

export default function ClearIcon({
	id,
	className
}: HTMLAttributes<HTMLOrSVGElement>): ReactElement {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			className={className}
			id={`svg_${id}`}
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				id={`path_${id}`}
				d='M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM16.207 14.793L14.793 16.207L12 13.414L9.207 16.207L7.793 14.793L10.586 12L7.793 9.207L9.207 7.793L12 10.586L14.793 7.793L16.207 9.207L13.414 12L16.207 14.793Z'
				fill='#969696'
			/>
		</svg>
	)
}
