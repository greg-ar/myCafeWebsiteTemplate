import { Box, Typography } from "@mui/material";

export default function Header({title,subtitle}){
    return(
        <Box
            sx={{
                backgroundColor:'primary.main',
                color:'primary.contrastText'
            }}
        >
            <Typography variant="h1">
                {title}
            </Typography>
            <Typography variant="subtitle1" sx={{p:1}}>
                {subtitle}
            </Typography>
        </Box>);
}