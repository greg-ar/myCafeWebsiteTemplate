import { AppBar, Button, Toolbar } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { pages } from "../PageContent/Pages/pages";
import { useEffect, useState } from "react";


function NavButton({page}){
    const location = useLocation();
    const navigator = useNavigate();
    const to = page.path;
    
    let isActive = false;
    if(to!=="" && to!=="/")
    { 
        isActive = location.pathname.startsWith(to);
    } else
    {
        isActive = location.pathname === to;
    }

    return(
    <Button
        variant={isActive?'outlined':'contained'}
        sx={{
            ml:1,
            mr:1,
            borderRadius:10,
            textTransform:'none',
            backgroundColor:isActive?'primary.contrastText':'primary.main',
            color:isActive?'primary.main':'primary.contrastText',
        }}
        startIcon={page.navicon}
        onClick={()=>navigator(to)}
    >
        {page.label}
    </Button>
    );
}

export default function NavBar(){

    const [isSticky, setIsSticky] = useState(false);

    useEffect(function(){
        const handleScroll = () => {
            setIsSticky(window.scrollY >= 150); 
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => window.removeEventListener('scroll', handleScroll);
    },[])

    return(
        <AppBar 
            position={isSticky?"fixed":"static"}
            sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                height:'50px'
            }}
        >
            <Toolbar>
                {pages.map((page)=>(<NavButton page={page} />))}
            </Toolbar> 
        </AppBar>
        );
}