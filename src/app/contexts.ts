/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Toaster } from 'components/atoms/Toaster/types/Toaster'
import { createContext } from 'react'

export const toasterContextDefaultValue: {
	toastList: Toaster[]
	setToastList: (state: Toaster[]) => void
} = {
	toastList: [],
	setToastList: (state: Toaster[]): void => {}
}

export const ToasterContext = createContext(toasterContextDefaultValue)
