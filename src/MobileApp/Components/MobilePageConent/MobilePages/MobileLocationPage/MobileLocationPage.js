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
            <Typography>Contact Us!</Typography>
            <List>
                {socials?.tel && 
                <ListItem>
                    <Button variant="contained" startIcon={<PhoneIcon />} onClick={handleCall}>{socials.tel}</Button>
                </ListItem>}

                {socials?.instagram &&
                <ListItem>
                    <Button variant="contained" startIcon={<InstagramIcon />} onClick={()=>handleClick(socials.instagram.url)} sx={{textTransform:'none'}}>{socials.instagram.handle}</Button>
                </ListItem>}

                {socials?.facebook &&
                <ListItem>
                    <Button variant="contained" startIcon={<FacebookIcon />} onClick={()=>handleClick(socials.facebook.url)} sx={{textTransform:'none'}}>{socials.facebook.pagename}</Button>
                </ListItem>}
            </List>
       </Box>
       );
}