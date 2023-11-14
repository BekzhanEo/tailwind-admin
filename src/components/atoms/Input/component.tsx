/* eslint-disable @typescript-eslint/no-unnecessary-type-arguments */
import type { Properties } from './properties'
import cx from 'classnames'
import type { ReactElement } from 'react'
import { forwardRef } from 'react'
import InputVariants from './types/InputVariants'
import InputMask from 'react-input-mask'

const formatChars = {
	'9': '[0-9]',
	a: '[A-Za-z]',
	'*': '[A-Za-zА-Яа-я0-9]'
}

const Input = forwardRef<HTMLInputElement, Properties>(
	(properties, reference) => {
		const {
			className,
			inputClassName,
			leftIcon,
			rightIcon,
			variant,
			label,
			error,
			onIconClick,
			mask,
			required,
			secondRightIcon,
			...rest
		} = properties
		function getIcon(
			icon: ReactElement | string | undefined
		): ReactElement | null {
			if (!icon) return null

			if (typeof icon === 'string') {
				return (
					<img
						className='h-5 w-5'
						src={`/icons/input/${icon}.svg`}
						alt='icon'
					/>
				)
			}
			return icon
		}

		return (
			<div
				className={cx(
					'relative',
					variant === InputVariants.TEXT_MAIN && 'w-input',
					variant === InputVariants.TEXT_LARGE && 'w-large-input',
					variant === InputVariants.SEARCH && 'w-input-search',
					className
				)}
			>
				{label && (
					<p
						className={cx(
							'mb-2 text-xs text-secondaryBlack dark:text-secondaryGray',
							{
								'text-error': error
							}
						)}
					>
						{label}&nbsp;{required && '*'}
					</p>
				)}
				<div className='relative z-0'>
					{leftIcon && (
						<div
							className={cx(
								'absolute left-0 z-10 ml-3.5 mr-auto inline inline flex h-full w-5 items-center'
							)}
						>
							{getIcon(leftIcon)}
						</div>
					)}
					<InputMask
						{...rest}
						inputRef={reference}
						className={cx(
							inputClassName,
							'h-11 w-full rounded-2xl border-secondaryGray text-sm placeholder-gray dark:bg-secondaryBlack dark:text-white dark:placeholder-white',
							{
								'pl-11': leftIcon,
								'pl-3': !leftIcon,
								'pr-11': rightIcon,
								'pr-16': rightIcon && secondRightIcon
							}
						)}
						mask={mask ?? ''}
						// @ts-expect-error:next-line
						maskChar=''
						formatChars={formatChars}
						onWheel={(event_): void => (event_.target as HTMLElement).blur()}
					/>
					{(rightIcon || secondRightIcon) && (
						<div
							className={cx(
								'absolute right-0 top-0 z-10 mr-3.5 inline flex h-full items-center gap-1',
								{
									'cursor-pointer': onIconClick
								}
							)}
							role='presentation'
							onClick={onIconClick}
						>
							{getIcon(secondRightIcon)}
							{getIcon(rightIcon)}
						</div>
					)}
				</div>
				{error && <p className='mt-2 text-xs text-error'>{error}</p>}
			</div>
		)
	}
)

Input.defaultProps = {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	variant: InputVariants.TEXT_MAIN
}

export default Input
