import type { ReactElement } from 'react'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import cx from 'classnames'
import { ArrowRightIcon } from 'shared/iconComponents'
import type { Properties } from './properties'

export default function RouteList({
	list,
	className
}: Properties): ReactElement {
	const navigate = useNavigate()
	const onClickLink = useCallback(
		(link: string) => () => {
			navigate(link)
		},
		[navigate]
	)
	return (
		<ul
			className={cx(
				'rounded bg-lightGray px-5 py-2 dark:bg-secondaryBlack',
				className
			)}
		>
			{list.map(route => (
				<li
					className='flex cursor-pointer items-center justify-between border-b border-secondaryGray py-3 last:border-b-0'
					key={route.key}
					onClick={onClickLink(route.route)}
				>
					{route.title}
					<ArrowRightIcon className='h-3 w-3 dark:fill-white' />
				</li>
			))}
		</ul>
	)
}
