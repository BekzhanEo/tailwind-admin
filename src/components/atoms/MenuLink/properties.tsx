import type { ReactElement } from 'react'

export interface Properties {
	readonly text: string
	readonly icon?: ReactElement
	readonly link: string
	readonly textClasses?: string
}
