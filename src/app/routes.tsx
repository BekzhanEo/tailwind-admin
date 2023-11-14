import { lazy } from 'react'
import { RoutesPaths } from './RoutesPathsEnum'

const MainPage = lazy(async () => import('pages/component'))

export const routes = [{ path: RoutesPaths.MAIN, element: <MainPage /> }]
