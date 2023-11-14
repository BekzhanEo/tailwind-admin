import type {
	InputHTMLAttributes,
	MouseEventHandler,
	ReactElement,
	RefAttributes
} from 'react'

export type Properties = InputHTMLAttributes<HTMLInputElement> &
	RefAttributes<HTMLInputElement> & {
		readonly variant?: string
		readonly label?: string
		readonly mask?: string
		readonly inputClassName?: string
		readonly error?: string
		readonly leftIcon?: ReactElement | string
		readonly secondRightIcon?: ReactElement | string
		readonly rightIcon?: ReactElement | string
		readonly onIconClick?: MouseEventHandler
	}
