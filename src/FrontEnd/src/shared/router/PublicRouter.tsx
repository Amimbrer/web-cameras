import { ReactNode } from "react";
import { Navigate } from "react-router-dom";


type PublicRouterProps =  {
  children: ReactNode
}

export const PublicRouter = ({children}: PublicRouterProps) => {
  const isAuth = false
  return (
    isAuth ? <Navigate to='/' /> : children 
  )
}
