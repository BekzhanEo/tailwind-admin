import type { ReactElement, HTMLAttributes } from 'react'

export default function LegalEntitiesIcon({
	className
}: HTMLAttributes<HTMLOrSVGElement>): ReactElement {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path d='M19 2H9C7.897 2 7 2.897 7 4V10H5C3.897 10 3 10.897 3 12V21C3 21.552 3.447 22 4 22H12H20C20.553 22 21 21.552 21 21V4C21 2.897 20.103 2 19 2ZM5 12H8H11V14V16V20H5V12ZM19 20H13V16V14V12C13 10.897 12.103 10 11 10H9V4H19V20Z' />
			<path d='M11 6H13V8H11V6ZM15 6H17V8H15V6ZM15 10.031H17V12H15V10.031ZM15 14H17V16H15V14ZM7 14.001H9V16.001H7V14.001Z' />
		</svg>
	)
}
