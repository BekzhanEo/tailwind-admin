/* eslint-disable react/jsx-no-constructed-context-values */
import LoadingOrError from 'components/LoadingOrError'
import { Suspense, useState } from 'react'
import type { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import { ToasterContext } from './contexts'
import type { Toaster } from 'components/atoms/Toaster/types/Toaster'
import Toast from 'components/atoms/Toaster/component'
import NotFound from '../pages/NotFound'

export default function App(): ReactElement {
	const [toastList, setToastList] = useState<Toaster[]>([])

	return (
		<ToasterContext.Provider value={{ toastList, setToastList }}>
			<BrowserRouter>
				<Suspense fallback={<LoadingOrError />}>
					<Routes>
						{routes.map(({ path, element }) => (
							<Route key={path} path={path} element={element} />
						))}
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
			<Toast toastList={toastList} setList={setToastList} />
		</ToasterContext.Provider>
	)
}
