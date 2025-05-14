import { Box } from "@mui/material";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import PageContent from "./Components/PageContent/PageContent";

export default function BrowserApp(){

    return(
        <Box sx={{textAlign:'center'}}>
            <Header />
            <NavBar />
            <PageContent />
        </Box>
    );

}