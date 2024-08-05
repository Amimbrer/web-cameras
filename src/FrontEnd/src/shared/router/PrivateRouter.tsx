import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type PrivateRouterProps =  {
  children: ReactNode
}

export const PrivateRouter = ({children}: PrivateRouterProps) => {
  const isAuth = true;
  return (
   isAuth ? children : <Navigate to='/login'/>
  )
}
