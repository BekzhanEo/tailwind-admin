import type { RefObject } from 'react'
import { useEffect } from 'react'

const useOutsideClick = <T extends HTMLElement>(
	reference: RefObject<T>,
	callback: () => void
): void => {
	useEffect(() => {
		const handler = (event: Event): void => {
			const element = reference.current
			const target = event.target as HTMLElement

			if (!element || element.contains(event.target as Node)) return
			if (target?.tagName === 'INPUT') return
			if (target?.tagName === 'IMG') return
			if (target?.tagName === 'SPAN') return
			if (target?.tagName === 'SELECT') return
			if (target?.tagName === 'BUTTON' && target?.id !== 'filter-button') return
			if (
				target?.tagName === 'path' &&
				['path_calendar-icon', 'path_clear-icon'].includes(target?.id)
			)
				return
			if (
				target?.tagName === 'svg' &&
				['svg_calendar-icon', 'svg_clear-icon'].includes(target?.id)
			)
				return

			callback()
		}
		document.addEventListener('click', handler)
		return () => {
			document.removeEventListener('click', handler)
		}
	}, [callback, reference])
}

export default useOutsideClick
