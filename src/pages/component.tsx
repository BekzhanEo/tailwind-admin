/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable unicorn/no-useless-undefined */
import type { ReactElement } from 'react'
import { useCallback, useContext, useState } from 'react'
import { ClearIcon, SearchIcon } from 'shared/iconComponents'
import MainLayout from 'components/molecules/MainLayout/component'
import InputVariants from 'components/atoms/Input/types/InputVariants'
import Input from 'components/atoms/Input/component'
import UserCard from 'components/molecules/UserCard/component'
import mockUsersList from 'store/users.json'
import type { User } from 'components/molecules/UserCard/properties'
import AddEditModal from 'components/molecules/AddEditModal/component'
import { ToasterContext } from '../app/contexts'
import { getSuccessToasterText } from 'shared/utils/getToasterText'

const MainPage = (): ReactElement => {
	const [searchText, setSearchText] = useState('')
	const [usersList, setUsersList] = useState<User[]>(
		mockUsersList as unknown as User[]
	)
	const [showModal, setShowModal] = useState(false)
	const [selectedUserData, setSelectedUserData] = useState<User | undefined>()
	const { setToastList } = useContext(ToasterContext)

	const onSearchInputChange = useCallback((value: string): void => {
		setSearchText(value)
	}, [])

	const onEditDataById = (userId: string): void => {
		const index = usersList.findIndex(u => u.id === userId)
		setSelectedUserData(usersList[index])
		setShowModal(true)
	}

	const onAddNewUser = (newUser: User): void => {
		setUsersList(previousState => [...previousState, newUser])
		setToastList(getSuccessToasterText('Пользователь успешно добавлен'))
	}

	const onDeleteUserById = (id: string): void => {
		setUsersList(previousState => previousState.filter(u => u.id !== id))
		setToastList(getSuccessToasterText('Пользователь успешно удален'))
	}

	const handleEditUser = (editedUser: User): void => {
		setUsersList(previousState =>
			previousState.map(user =>
				user.id === editedUser.id ? { ...user, ...editedUser } : user
			)
		)
		setToastList(getSuccessToasterText('Данные пользователя успешно обновлены'))
	}

	const onCloseAddEditModal = (): void => {
		setShowModal(false)
		setSelectedUserData(undefined)
	}

	return (
		<MainLayout>
			<div className='rounded-3xl bg-white pt-6'>
				<div className='mb-6 flex items-center justify-between px-8'>
					<p className='mr-16 text-xl font-bold'>Команда</p>
					<Input
						type='text'
						placeholder='Поиск по Email'
						rightIcon={
							<div className='flex'>
								{searchText ? (
									<button
										type='button'
										onClick={(): void => onSearchInputChange('')}
									>
										<ClearIcon />
									</button>
								) : (
									<SearchIcon />
								)}
							</div>
						}
						variant={InputVariants.SEARCH}
						value={searchText}
						onChange={(event): void => onSearchInputChange(event.target.value)}
					/>
					<button
						type='button'
						className='rounded-xl bg-[#32C076] px-8 py-2 text-white'
						onClick={(): void => {
							setShowModal(true)
						}}
					>
						Добавить пользователя
					</button>
				</div>
				{usersList.map((user: User, index) => (
					<UserCard
						key={index.toString()}
						user={user}
						onDeleteUser={onDeleteUserById}
						onEditData={onEditDataById}
					/>
				))}
				{showModal && (
					<AddEditModal
						show={showModal}
						user={selectedUserData}
						onClose={onCloseAddEditModal}
						onAddUser={onAddNewUser}
						onEditData={handleEditUser}
					/>
				)}
			</div>
		</MainLayout>
	)
}

export default MainPage
