import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../context/userContext"

export const ProtectedRoute = () => {
    const { isAutenticated } = useContext(UserContext)

    if(!isAutenticated) return <Navigate to="/login" replace />

  return (
    <Outlet />
  )
}
