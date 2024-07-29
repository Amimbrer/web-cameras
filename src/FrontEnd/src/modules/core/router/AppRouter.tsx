import { Route, Routes } from "react-router-dom";

import { MainLayout, CoreRoutes, CoreRoutes2 } from "@core/index";
import { AuthRoutes, MainLayout as AuthLayout } from "@auth/index";
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
          <Route  path="auth/*" element={<AuthRoutes />}/>
      </Route>

      {/* Private routes */}
      <Route 
        element= {
          <PrivateRouter>
            <MainLayout />
          </PrivateRouter>
        }
        
      > 
        <Route index element={<CoreRoutes />} />
        <Route path="core2" element={<CoreRoutes2 />}/>
        <Route path="*" element={<div>Not Found 1</div>} />
      </Route>


        
    </Routes>
  )
}
