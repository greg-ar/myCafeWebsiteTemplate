import { Box, Paper, Typography } from '@mui/material';
import menu from '../../../../../data/menu.json';
import MobileMenuCategory from './MobileMenuCategory';

export default function MobileMenuPage(){
   
    return(
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{mt:4,mb:8}}
        >
            {menu.categories.map((category)=>(
                <MobileMenuCategory category={category} />
            ))}


            <Paper
            sx={{
                borderRadius:3
            }}
            >
                <Typography
                    sx={{ml:3,mr:3,m:1}}
                >
                    <b>Chef:</b> {menu.chef.name} <b>{menu.chef.surname}</b>
                </Typography>
            </Paper>
            <Box
                sx={{
                    textAlign:'left',
                    width:'80%',
                }}
            >
                <Typography sx={{m:1}}>
                    {menu.appendice}
                </Typography>
            </Box>
        </Box>);

}