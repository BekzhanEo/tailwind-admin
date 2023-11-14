import type { ReactElement, HTMLAttributes } from 'react'

export default function DetailsDotIcon({
	className
}: HTMLAttributes<HTMLOrSVGElement>): ReactElement {
	return (
		<svg
			width='20'
			height='4'
			viewBox='0 0 20 4'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<circle cx='2' cy='2' r='2' fill='#C1C1CB' />
			<circle cx='10' cy='2' r='2' fill='#C1C1CB' />
			<circle cx='18' cy='2' r='2' fill='#C1C1CB' />
		</svg>
	)
}
