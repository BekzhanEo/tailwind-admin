export interface Properties {
	user: User
	onEditData: (id: string) => void
	onDeleteUser: (id: string) => void
}

export interface User {
	id: string
	name: string
	email: string
	image: string
	permissions: UserPermission[]
}

export interface UserPermission {
	title: string
	value: string
	fillColor?: string
	textColor?: string
}
