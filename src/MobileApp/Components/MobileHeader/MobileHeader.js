import { AppBar, Button } from "@mui/material";
import { useNavigate } from "react-router";
import details from '../../../data/details.json';


export default function MobileHeader(){


    const navigator = useNavigate();

    return (
    <AppBar
        sx={{height:'40px'}}
    >
        <Button
            sx={{
                textTransform:'none',
                color:'primary.contrastText'
            }}
            onClick={()=>navigator("")}
        >
            {details.title}
        </Button>
    </AppBar>);
}