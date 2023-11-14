import type { UserPermission } from '../UserCard/properties'

export const mockPermissionList: UserPermission[] = [
	{
		title: 'Обращение клиентов',
		fillColor: '#C1C1CB',
		textColor: '#9494A0',
		value: 'clientRequests'
	},
	{
		title: 'Администратор',
		fillColor: '#5A57FF',
		textColor: '#9494A0',
		value: 'admin'
	},
	{
		title: 'Блог',
		fillColor: '#C1C1CB',
		textColor: '#9494A0',
		value: 'blog'
	},
	{
		title: 'Аналитика',
		fillColor: '#C1C1CB',
		textColor: '#9494A0',
		value: 'analyst'
	},
	{
		title: 'Акции',
		fillColor: '#C1C1CB',
		textColor: '#9494A0',
		value: 'stonks'
	},
	{
		title: 'Модерация объявлений',
		fillColor: '#C1C1CB',
		textColor: '#9494A0',
		value: 'moderatorsPin'
	},
	{
		title: 'Тех. поддержка',
		fillColor: '#C1C1CB',
		textColor: '#9494A0',
		value: 'techProm'
	}
]
