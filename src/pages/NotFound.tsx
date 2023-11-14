import type { ReactElement } from 'react'

export default function NotFound(): ReactElement {
	return (
		<div className='flex h-screen w-screen flex-col items-center justify-center font-semibold'>
			<p className='text-2xl'>404</p>
			<p className='text-xl text-gray'>Страница не найдена</p>
		</div>
	)
}
