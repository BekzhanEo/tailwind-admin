import type { User } from '../UserCard/properties'

export interface Properties {
	show: boolean
	user?: User
	onEditData: (values: User) => void
	onAddUser: (values: User) => void
	onClose: () => void
}
