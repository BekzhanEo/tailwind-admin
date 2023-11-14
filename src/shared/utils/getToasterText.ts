import type { Toaster } from 'components/atoms/Toaster/types/Toaster'
import ToasterTypes from 'components/atoms/Toaster/types/ToasterTypes'

export const getSuccessToasterText = (title: string): Toaster[] => [
	{
		id: 1,
		title,
		type: ToasterTypes.Success
	}
]

export const getErrorToasterText = (errorTitle: string): Toaster[] => [
	{
		id: 1,
		title: errorTitle,
		type: ToasterTypes.Error
	}
]
