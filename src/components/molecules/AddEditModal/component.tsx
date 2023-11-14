import type { Properties } from './properties'
import type { ReactElement } from 'react'
import { Form, Input, Modal, Select } from 'antd'
import type { SelectProps } from 'antd/lib'
import { mockPermissionList } from './mock'
import type { User, UserPermission } from '../UserCard/properties'
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function AddEditModal({
	show,
	user,
	onClose,
	onAddUser,
	onEditData
}: Properties): ReactElement {
	const options: SelectProps['options'] = mockPermissionList.map(per => ({
		label: per.title,
		value: per.value
	}))
	const defaultOptions: string[] = user?.permissions.map(per => per.value) ?? []

	const onFinish = (values: any): void => {
		const parsedPermissions: UserPermission[] = []
		for (const per of mockPermissionList) {
			for (const value of values.permissions) {
				if (per.value === value) {
					parsedPermissions.push(per)
				}
			}
		}
		if (user) {
			onEditData({ ...values, permissions: parsedPermissions } as User)
		} else {
			onAddUser({ ...values, permissions: parsedPermissions } as User)
		}
		onClose()
	}

	return (
		<Modal
			title={
				user ? 'Редактирование пользователя' : 'Добавление нового пользователя'
			}
			open={show}
			onCancel={onClose}
			footer={null}
		>
			<Form
				className='mt-10'
				name='basic'
				style={{ maxWidth: 600 }}
				labelCol={{ span: 6 }}
				initialValues={{
					...user,
					permissions: user?.permissions.map(u => u.value)
				}}
				onFinish={onFinish}
				autoComplete='off'
			>
				<Form.Item<User> label='ID' name='id'>
					<Input disabled={!!user} rootClassName='rounded-xl' />
				</Form.Item>
				<Form.Item<User> label='ФИО' name='name'>
					<Input rootClassName='rounded-xl' />
				</Form.Item>

				<Form.Item<User> label='Email' name='email'>
					<Input rootClassName='rounded-xl' />
				</Form.Item>
				<Form.Item<User> label='Изображение' name='image'>
					<Input.TextArea rootClassName='rounded-xl' />
				</Form.Item>
				<Form.Item<User> label='Разрешения' name='permissions'>
					<Select
						mode='multiple'
						style={{ width: '100%' }}
						placeholder='Please select'
						defaultValue={defaultOptions}
						options={options}
					/>
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<button
						className='rounded-xl bg-[#32C076] p-3 text-white'
						type='submit'
					>
						{user ? 'Редактировать' : 'Добавить'}
					</button>
				</Form.Item>
			</Form>
		</Modal>
	)
}
