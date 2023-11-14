/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-array-index-key */
import { memo, useLayoutEffect, useMemo, useState } from 'react'
import MenuLink from 'components/atoms/MenuLink/component'
import cx from 'classnames'
import { menuList } from './mockData'
import { session } from 'shared/utils/storage'

const Menu = memo(() => {
	const [isOpen, setOpen] = useState<boolean>(true)

	useLayoutEffect(() => {
		const itemOfStorage = session.getItem<boolean>('collapsed')
		if (typeof itemOfStorage === 'boolean') {
			setOpen(itemOfStorage)
		}
	}, [])
	const onToggleOpen = (): void => {
		setOpen(previous => !previous)
		session.setItem<boolean>('collapsed', !isOpen)
	}

	const menuLinkTextTransformClasses = useMemo(
		() =>
			cx('transition-transform duration-300', {
				'translate-x-0': isOpen,
				'translate-x-14': !isOpen
			}),
		[isOpen]
	)

	return (
		<aside
			className={cx(
				'relative h-full overflow-hidden border-r border-secondaryGray transition-[width] duration-100',
				{
					'w-[5rem] overflow-hidden': !isOpen,
					'grid w-[16.5rem] grid-rows-menu': isOpen
				}
			)}
		>
			<button
				type='button'
				className='flex w-[16.5rem] items-center justify-between py-4.5 pl-6 pr-5'
				onClick={onToggleOpen}
			>
				{isOpen && <p className='text-sm font-semibold'>Меню</p>}
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					className={cx('h-8 w-8 cursor-pointer dark:fill-white', {
						'rotate-180': !isOpen
					})}
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						className='dark:fill-white'
						d='M12.7069 7.707L11.2929 6.293L5.58594 12L11.2929 17.707L12.7069 16.293L8.41394 12L12.7069 7.707Z'
						fill='black'
					/>
					<path
						className='dark:fill-white'
						d='M16.2929 6.293L10.5859 12L16.2929 17.707L17.7069 16.293L13.4139 12L17.7069 7.707L16.2929 6.293Z'
						fill='black'
					/>
				</svg>
			</button>
			<nav
				className={cx('h-full overflow-x-hidden', {
					'overflow-auto': isOpen,
					'overflow-hidden': !isOpen
				})}
			>
				<ul className='pb-24'>
					{menuList.map(({ text, link, icon }, index) => (
						<li key={`${link}_${index}`}>
							<MenuLink
								text={isOpen ? text : ''}
								link={link}
								icon={icon}
								textClasses={menuLinkTextTransformClasses}
							/>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	)
})

export default Menu
