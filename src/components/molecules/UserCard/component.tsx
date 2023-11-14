/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-handler-names */
import type { ReactElement } from 'react'
import type { Properties } from './properties'
import DetailsDotIcon from 'shared/iconComponents/DetailsDotIcon'
import Dropdown from '../../atoms/Dropdown/component'
import { useRef, useState } from 'react'
import useOutsideClick from 'shared/hooks/useOutsideClick'

export enum DropdownValue {
	changeUserData = 'changeUserData',
	deleteUser = 'deleteUser'
}

export default function UserCard({
	user,
	onEditData,
	onDeleteUser
}: Properties): ReactElement {
	const { id, name, email, permissions, image } = user
	const [isOpen, setOpen] = useState(false)
	const dropdownReference = useRef<HTMLButtonElement>(null)
	useOutsideClick<HTMLButtonElement>(dropdownReference, () => setOpen(false))

	const onSelectOption = (value: string | null): void => {
		if (value === DropdownValue.changeUserData) {
			onEditData(id)
		} else if (value === DropdownValue.deleteUser) {
			onDeleteUser(id)
		}
		setOpen(false)
	}

	return (
		<div
			key={id}
			className='flex items-center justify-between p-3 px-10 py-5 hover:bg-[#EFEFF6]'
		>
			<div className='flex'>
				<img
					src={image}
					alt='icon'
					className='mr-[20px] h-[64px] w-[64px] rounded-3xl object-cover'
				/>
				<div>
					<div className='mb-2 flex items-center'>
						<p className='mr-3 text-lg font-bold text-[#424F5E]'>{name}</p>
						<p className='text-sm text-[#9494A0]'>{email}</p>
					</div>
					<div className='flex'>
						{permissions.map(({ title, fillColor }, index) => (
							<div
								key={index.toString()}
								className='mr-2 rounded-xl border-2 px-3'
								style={{ borderColor: fillColor, color: fillColor }}
							>
								{title}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='relative'>
				<button
					type='button'
					className='relative p-2'
					onClick={() => setOpen(true)}
					ref={dropdownReference}
				>
					<DetailsDotIcon />
				</button>
				<Dropdown
					isOpen={isOpen}
					options={[
						{ label: 'Редактировать', value: DropdownValue.changeUserData },
						{ label: 'Удалить', value: DropdownValue.deleteUser }
					]}
					onSelectOption={onSelectOption}
				/>
			</div>
		</div>
	)
}
