import details from '../../../data/details.json';

import { Box, Typography } from "@mui/material";

export default function Header(){
    return(
        <Box
            sx={{
                backgroundColor:'primary.main',
                color:'primary.contrastText',
                height:"100px"
            }}
        >
            <Typography variant="h2">
                {details.title}
            </Typography>
            <Typography variant="subtitle1" sx={{p:1}}>
                {details.subtitle}
            </Typography>
        </Box>);
}