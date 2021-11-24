import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/redux'

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const authValue = useAuth()
  const uid = authValue.auth.user.uid
  if (!uid) {
    return <Navigate to="/sign-in" />
  }
  return children
}

export default RequireAuth
