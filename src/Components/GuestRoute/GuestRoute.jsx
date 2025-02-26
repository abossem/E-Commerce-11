import { Navigate } from "react-router-dom"

export default function GuestRoute({children}) {
    const token = true
  if (token) {
    return children
  }else {
    return <Navigate to={'/login'} />
  }
}
