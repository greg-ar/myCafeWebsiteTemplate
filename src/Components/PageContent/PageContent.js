import { Route, Routes } from "react-router";
import { pages } from "./Pages/pages";


export default function PageContent(){

    return(
        <Routes>
            {pages.map((page)=>(<Route path={page.path} element={page.component}/>))}
        </Routes>
    );
}