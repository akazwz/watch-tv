import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type {RootState, AppDispatch} from '../redux/store'
import {auth} from '../redux/auth'
import { theme } from '../redux/theme'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAuth = () => useAppSelector(auth)
export const useTheme = () => useAppSelector(theme)
