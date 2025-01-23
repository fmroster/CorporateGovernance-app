import {RouteObject} from 'react-router'
import { privateRoute } from './private'
import { publicRoutes } from './public'

export const routes: RouteObject[] = [
  ...privateRoute,
  ...publicRoutes
]