import { Box, Paper, Typography } from '@mui/material';
import menu from '../../../../../data/menu.json';
import MenuCategory from './MenuCategory';

export default function MenuPage(){
    return(
    <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
    >
        {menu.categories.map((category)=>(
            <MenuCategory category={category} />
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
        {(menu?.appendice)&&
        <Box
            sx={{
                textAlign:'left',
                width:1000,
            }}
        >
            <Typography sx={{m:1}}>
                {menu.appendice}
            </Typography>
        </Box>}
    </Box>);
}