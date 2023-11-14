import type { Toaster } from './types/Toaster'

export interface Properties {
	readonly className?: string
	readonly toastList: Toaster[]
	readonly setList: (list: Toaster[]) => void
}
