/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { ReactElement, HTMLAttributes } from 'react'

export default function ArrowFilledUpIcon({
	className,
	id
}: HTMLAttributes<HTMLOrSVGElement>): ReactElement {
	return (
		<svg
			width='8'
			height='12'
			viewBox='0 0 8 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			id={`svg_${id}`}
		>
			<path
				id={`path_${id}`}
				className={className}
				d='M1.70697 11.707L7.41397 6L1.70697 0.292999L0.292969 1.707L4.58597 6L0.292969 10.293L1.70697 11.707Z'
				fill='#5C5C5C'
			/>
		</svg>
	)
}
