import type { ReactElement } from 'react'
import type { Properties } from './properties'
import Menu from 'components/molecules/Menu/component'

export default function MainLayout({ children }: Properties): ReactElement {
	return (
		<div className='h-screen w-screen bg-[#EBEBF0]'>
			<main className='flex h-mainSectionHeight w-full justify-between'>
				<Menu />
				<div className='flex-1 overflow-y-auto'>
					<div className='px-24 py-8'>{children}</div>
				</div>
			</main>
		</div>
	)
}

MainLayout.defaultProps = {
	type: 'full-width'
}
