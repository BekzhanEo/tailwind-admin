import type ToasterTypes from './ToasterTypes'

export interface Toaster {
	readonly id: number
	readonly type: ToasterTypes
	readonly title: string
	readonly text?: string
}
