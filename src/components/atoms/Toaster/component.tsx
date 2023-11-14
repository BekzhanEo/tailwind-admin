/* eslint-disable react-hooks/exhaustive-deps, @typescript-eslint/no-unnecessary-condition */
import type { Properties } from './properties'
import cx from 'classnames'
import type { ReactElement } from 'react'
import { useEffect } from 'react'

const TOASTER_DISAPPEARING_TIME = 4000

export default function Toast({
	className,
	toastList,
	setList
}: Properties): ReactElement {
	const onDeleteToast = (id: number): void => {
		const toastListItem = toastList.filter(toast => toast.id !== id)
		setList(toastListItem)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if (toastList.length > 0) {
				onDeleteToast(toastList[0].id)
			}
		}, TOASTER_DISAPPEARING_TIME)
		return () => {
			clearInterval(interval)
		}
	}, [toastList, onDeleteToast])

	return (
		<div className='fixed top-4 right-4 z-10'>
			{toastList.map(toast => (
				<div
					key={toast.id}
					className={cx(
						`mb-3 flex max-w-md items-start border-l-4 bg-black p-4 border-l-${toast.type}`,
						className
					)}
				>
					<img src={`/icons/toaster/${toast.type}.svg`} alt='toaster-type' />
					<div className='mx-4'>
						<p className='text-sm font-semibold text-white'>{toast.title}</p>
						{toast.text && (
							<p className='text-sm text-secondaryGray'>{toast.text}</p>
						)}
					</div>
					<img
						className='cursor-pointer'
						src='/icons/toaster/close-icon.svg'
						alt='close-icon'
						role='presentation'
						onClick={(): void => onDeleteToast(toast.id)}
					/>
				</div>
			))}
		</div>
	)
}
