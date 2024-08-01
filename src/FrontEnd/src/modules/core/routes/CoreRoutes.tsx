import { Route, Routes } from "react-router-dom";

import { HomePage, ProfilePage } from "@core/index";


export const CoreRoutes = () => {

    
    return (
        <Routes>
            <Route 
                index 
                element={
                    <HomePage/>
                }
                />
            <Route 
                path='/profile' 
                element={
                    <ProfilePage/>
                }
                />            <Route path="*" element={<div>Not Found auth</div>} />

        </Routes>
    )
}
