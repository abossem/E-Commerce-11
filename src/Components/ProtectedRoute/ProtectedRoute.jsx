import { Navigate } from "react-router-dom"
import { useUserContext } from "../../context/User.context"

export default function ProtectedRoute({children}) {
    const {token} = useUserContext()
  if (token) {
    return children
  }else {
    return <Navigate to={'/login'} />
  }
}