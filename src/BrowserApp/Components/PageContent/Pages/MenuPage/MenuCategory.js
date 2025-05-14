import { Box, Divider, IconButton, Paper, Table, TableBody, TableCell, TableFooter, TableRow, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

export default function MenuCategory({category}){

    const [showMenuItems,setShowMenuItems] = useState(true);
    const [menuItemsHeight,setMenuItemsHeight] = useState('0px');
    const menuItemsContainerRef = useRef(null);

    useEffect(function(){
        if(showMenuItems){
            setMenuItemsHeight(`${menuItemsContainerRef.current.scrollHeight}px`)
        } else {
            setMenuItemsHeight('0px');
        }    
    },[showMenuItems]);
    
    return(
        <Paper
            sx={{
                m:3,
                width:1000,
            }}
        >
            <Box
                sx={{
                    textAlign:'left',
                    display:'flex',
                    alignItems:'center',
                    ml:3,
                }}
            >
                <Typography variant="h5">{category.name}</Typography>
                <IconButton onClick={()=>setShowMenuItems(!showMenuItems)}>
                    {showMenuItems?<ExpandLess />:<ExpandMore />}
                </IconButton>
            </Box>
            <Divider />
                <Box
                    sx={{
                        height: menuItemsHeight,
                        overflow: "hidden",
                        transition: 'height 0.5s ease',
                    }}
                >
                    <div ref={menuItemsContainerRef}>
                        <Table>
                            <TableBody>
                                {category.items.map((item,i)=>(
                                    <TableRow key={i}>
                                        <TableCell component="th" scope="row" sx={{width:800}}>
                                            <Typography variant="h6">{item.name}</Typography>
                                            <Typography variant="subtitle2">{item.description}</Typography>
                                        </TableCell>
                                        <TableCell align="right">
                                            {(item?.price) && <Typography>{item.price.toFixed(2)} €</Typography>}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            {(category?.appendice)&&
                                <TableFooter
                                    sx={{
                                        textAlign:'left',
                                    }}
                                >
                                    {category.appendice.map((apd)=>(
                                        <Typography
                                            sx={{
                                                ml:3
                                            }}
                                        >
                                            {apd}
                                        </Typography>
                                    ))}
                                </TableFooter>
                            }
                        </Table>
                    </div>

                </Box>
        </Paper>
    );

}