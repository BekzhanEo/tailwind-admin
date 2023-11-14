import { Link } from 'react-router-dom'
import type { ReactElement } from 'react'
import type { Properties } from './properties'
import cn from 'classnames'

export default function MenuLink({
	text,
	icon,
	link,
	textClasses
}: Properties): ReactElement {
	const urlFirstPart = window.location.pathname.split('/')[1]
	const linkFirstPart = link.split('/')[1]
	// eslint-disable-next-line unicorn/prefer-spread
	const match = linkFirstPart === urlFirstPart

	return (
		<Link to={link}>
			<div
				className={cn(
					'relative flex items-center gap-3 py-3 pl-6 hover:fill-brand hover:font-medium hover:text-brand',
					match ? 'fill-brand font-medium text-brand' : 'fill-gray'
				)}
			>
				{match && <div className='absolute left-0 h-full w-1 bg-brand' />}
				<div className='relative h-6 w-6'>{icon}</div>
				<p
					className={cn(
						'z-10 inline-flex h-8 items-center text-sm',
						textClasses
					)}
				>
					{text}
				</p>
			</div>
		</Link>
	)
}
