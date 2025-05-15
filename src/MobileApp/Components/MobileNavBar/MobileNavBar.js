import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { mobilePages } from "../MobilePageConent/MobilePages/mobilePages";
import { useEffect, useState } from "react";


export default function MobileNavBar(){
    const location = useLocation();
    const navigator = useNavigate();

    const [currPath,setCurrPath] = useState(location.pathname);

    useEffect(function(){
       setCurrPath(location.pathname);
    },[location]);

    
    return(
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={currPath}
                onChange={(e, newPath) => {
                  navigator(newPath);
                }}
                sx={{
                    backgroundColor:'primary.main',
                    color:'primary.contrastText',
                }}
            >
                {mobilePages.map((page)=>
                    (
                        <BottomNavigationAction 
                            label={page.label} 
                            icon={page.navicon} 
                            value={page.path}
                            sx={{
                                color: 'primary.contrastText',
                                '&.Mui-selected': {
                                    color: 'secondary.main',
                                },
                                '&.Mui-selected .MuiBottomNavigationAction-label': {
                                    fontSize: '0.75rem',
                                },
                                '& .MuiSvgIcon-root': {
                                    transition: 'color 0.3s',
                                },
                                '&.Mui-selected .MuiSvgIcon-root': {
                                    color: 'secondary.main',
                                }
                            }}  
                        />

                    ))}

            </BottomNavigation>
        </Paper>
        );
}