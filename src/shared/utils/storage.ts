/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
export const session = {
	setItem<T extends unknown>(key: string, value: T): void {
		sessionStorage.setItem(key, JSON.stringify(value))
	},
	getItem<T extends unknown>(key: string): T | undefined {
		const item = sessionStorage.getItem(key)
		if (item) {
			return JSON.parse(item)
		}
		return undefined
	},
	removeItem(key: string): void {
		sessionStorage.removeItem(key)
	},
	clear(): void {
		sessionStorage.clear()
	}
}
