import { Box } from "@mui/material";
import MobileNavBar from "./Components/MobileNavBar/MobileNavBar";
import MobileHeader from "./Components/MobileHeader/MobileHeader";
import MobilePageContent from "./Components/MobilePageConent/MobilePageContent";

export default function MobileApp(){
    return(
        <Box>
            <MobileHeader /> 
            <MobilePageContent />
            <MobileNavBar />
        </Box>)
}