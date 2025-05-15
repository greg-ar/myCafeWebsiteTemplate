import { Box, Button, List, ListItem, Typography } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import socials from '../../../../../data/socials.json';

export default function MobileContactPage(){

    function handleCall(){
        window.location.href = `tel:${socials.tel}`;
    }

    function handleClick(to){
        window.open(to,'_blank');
    }

    return(
       <Box 
            sx={{
                mt:7
            }}
            display="flex"
            flexDirection="column"
            alignItems="center"
       >
            <Typography>Επικοινωνήστε μαζί μας!</Typography>
            <List>
                <ListItem>
                    <Button variant="contained" startIcon={<PhoneIcon />} onClick={handleCall}>{socials.tel}</Button>
                </ListItem>
                <ListItem>
                    <Button variant="contained" startIcon={<InstagramIcon />} onClick={()=>handleClick(socials.instagram.url)} sx={{textTransform:'none'}}>{socials.instagram.handle}</Button>
                </ListItem>
                <ListItem>
                <Button variant="contained" startIcon={<FacebookIcon />} onClick={()=>handleClick(socials.facebook.url)} sx={{textTransform:'none'}}>Del Mar Porto Rafti</Button>
                </ListItem>
            </List>
       </Box>
       );
}