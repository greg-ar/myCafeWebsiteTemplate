import { Route, Routes } from "react-router";
import MobileHomePage from "./MobilePages/MobileHomePage/MobileHomePage";
import { mobilePages } from "./MobilePages/mobilePages";
import { Box } from "@mui/material";

export default function MobilePageContent(){
    return(
        <Box
            sx={{
                textAlign:'center'
            }}  
        >
            <Routes>
                <Route path="" element={<MobileHomePage />}/>
                {mobilePages.map((page)=>(<Route path={page.path} element={page.component}/>))}
            </Routes>
        </Box>
    );
}