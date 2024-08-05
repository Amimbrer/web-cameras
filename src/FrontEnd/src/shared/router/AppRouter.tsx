import { Route, Routes } from "react-router-dom";

import { Layout as PrivateLayout, CoreRoutes } from "@core/index";
import { AuthRoutes, Layout as AuthLayout } from "@auth/index";
import { PrivateRouter, PublicRouter } from '.'

export const AppRouter = () => {
  return (
    <Routes>


      {/* Public routes, auth module */}
      <Route 
        element= {
          <PublicRouter>
            <AuthLayout />
          </PublicRouter>
        }
      >
          <Route path="auth/*" element={<AuthRoutes />}/>
      </Route>

      {/* Private routes */}
      <Route 
        element= {
          <PrivateRouter>
            <PrivateLayout />
          </PrivateRouter>
        }
        
      > 
        <Route index element={<CoreRoutes />} />
        <Route path="*" element={<div>Not Found 1</div>} />
      </Route>
    </Routes>
  )
}
