/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import type { ChangeEvent, ReactElement } from 'react'
import { useCallback, useEffect, useState } from 'react'
import cx from 'classnames'
import type { Option } from './types'
import type { ILoadOption } from 'shared/commonTypes/types'
import Loading from '../Loading/component'
import Input from '../Input/component'
import { useDebounce } from 'use-debounce'

interface Properties {
	isOpen: boolean
	className?: string
	onSelectOption: (value: string) => void
	options: Option[]
	value?: string
	isSearchable?: boolean
	additional?: Record<string, number | string>
	loadOptions?: (
		search: string,
		previousOptions: any,
		additional: Record<string, number | string> | undefined
	) => Promise<ILoadOption>
	children?: JSX.Element
}

const Dropdown = ({
	isOpen,
	className,
	options = [],
	onSelectOption,
	value,
	additional,
	loadOptions: loadOptionsProperty,
	isSearchable,
	children
}: Properties): ReactElement => {
	const [dropdownOptions, setDropdownOptions] = useState(options)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [currentPage, setCurrentPage] = useState<number>(0)
	const [hasMore, setHasMore] = useState<boolean>(true)
	const [searchText, setSearchText] = useState('')
	const [searchTextDebounced] = useDebounce(searchText, 300)

	const getLoadOptions = useCallback(
		(search: boolean): void => {
			if (!loadOptionsProperty || (!hasMore && !search) || isLoading) return

			setIsLoading(true)

			loadOptionsProperty(searchTextDebounced, [], {
				...additional,
				page: currentPage
			})
				.then(response => {
					setDropdownOptions([...dropdownOptions, ...response.options])
					setCurrentPage(state => state + 1)
					setHasMore(response.hasMore)
				})
				.finally(() => {
					setIsLoading(false)
				})
		},
		[currentPage, isOpen, isLoading, searchTextDebounced]
	)

	const onCalcScrollAndLoadOptions = (event: any): void => {
		if (!loadOptionsProperty || isLoading) return

		const { target } = event
		const { scrollHeight, scrollTop, offsetHeight } = target

		if (scrollTop + offsetHeight > scrollHeight - 40) {
			getLoadOptions(false)
		}
	}

	const onSearchChange = (event: ChangeEvent): void => {
		setCurrentPage(0)
		setDropdownOptions([{ label: 'Все', value: 'ALL' }])
		setSearchText((event.target as HTMLInputElement).value)
	}

	useEffect(() => {
		if (loadOptionsProperty && isOpen) {
			getLoadOptions(false)
		}
	}, [isOpen])

	useEffect(() => {
		if (isSearchable && isOpen) {
			getLoadOptions(true)
		}
	}, [searchTextDebounced])

	return (
		<div
			className={cx(
				'absolute left-0 z-50 min-w-full  rounded-md border border-secondaryGray bg-white shadow transition-all duration-150 dark:border-secondaryBlack dark:bg-secondaryGray',
				className,
				{
					'h-auto translate-y-0 opacity-100': isOpen,
					'hidden h-0 -translate-y-5': !isOpen
				}
			)}
		>
			<ul
				className={cx(
					'flex flex-col overflow-y-auto',
					children ? 'max-h-[205px]' : 'max-h-[286px]'
				)}
				onScroll={onCalcScrollAndLoadOptions}
			>
				{isSearchable && (
					<div className='sticky top-0 border-b border-secondaryGray bg-lightGray dark:bg-secondaryBlack dark:text-black '>
						<Input
							value={searchText}
							inputClassName='bg-lightGray rounded-none focus:outline-none'
							placeholder='Введите текст'
							onChange={onSearchChange}
						/>
					</div>
				)}
				{dropdownOptions?.map(item => (
					<li
						key={item.value}
						className='border-b border-secondaryGray hover:rounded-t-md hover:bg-brandSecondary dark:border-black dark:text-black'
					>
						<button
							type='button'
							className='flex w-full items-center justify-between p-3 text-left text-sm leading-6'
							onClick={(): void => onSelectOption(item.value)}
						>
							{item.label}
							{value && item.value === value && (
								<img src='/icons/common/check-mark.svg' alt='check-mark' />
							)}
						</button>
					</li>
				))}
				{isLoading && <Loading width='40px' height='40px' />}
			</ul>
			{children}
		</div>
	)
}
Dropdown.defaultProps = {
	className: 'top-full'
}
export default Dropdown
