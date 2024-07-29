import { Route } from "react-router-dom";

import { HomePage, ProfilePage } from "@core/index";


export const CoreRoutes2 = () => {


    return (
        <>
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
            />
        </>
    )
}
