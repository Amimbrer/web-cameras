import { Route, Routes } from "react-router-dom";

import { LoginPage,RegistrePage } from "@auth/index";


export const AuthRoutes = () => {
    return (
        <Routes>
            <Route 
                path="/login" 
                element={
                    <LoginPage/>
                }
            />
            <Route 
                path='/registre' 
                element={
                    <RegistrePage/>
                }
            />

            <Route path="*" element={<div>Not Found auth</div>} />
        </Routes>
    )
}
