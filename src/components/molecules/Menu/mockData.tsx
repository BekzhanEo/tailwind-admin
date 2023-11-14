import { RoutesPaths } from 'app/RoutesPathsEnum'
import type { ReactElement } from 'react'
import { LegalEntitiesIcon } from 'shared/iconComponents'

interface MenuListType {
	link: RoutesPaths
	text: string
	icon: ReactElement
}

// eslint-disable-next-line import/prefer-default-export
export const menuList: MenuListType[] = [
	{
		link: RoutesPaths.MAIN,
		text: 'Команда',
		icon: <LegalEntitiesIcon />
	}
]
