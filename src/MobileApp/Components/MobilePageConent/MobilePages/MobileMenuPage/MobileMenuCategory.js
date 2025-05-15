import { Box, Button, Divider, Paper, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

export default function MobileMenuCategory({category}){

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
                width:'80%',
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
                <Button
                    endIcon={showMenuItems?<ExpandLess />:<ExpandMore />}
                    onClick={()=>setShowMenuItems(!showMenuItems)}
                    sx={{
                        textTransform:'none',
                        fontSize:'1.5rem'
                    }}
                >
                    {category.name}
                </Button>
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
                                {category.items.map((item)=>(
                                    <TableRow key={item.name}>
                                        <TableCell component="th" scope="row" sx={{width:'60%'}}>
                                            <Typography variant="h6">{item.name}</Typography>
                                            <Typography variant="subtitle2">{item.description}</Typography>
                                        </TableCell>
                                        <TableCell align="right">
                                            {(item?.price) && <Typography>{item.price} €</Typography>}
                                        </TableCell>
                                    </TableRow>
                                ))}

                                {(category?.appendice)&&
                                <TableRow
                                    sx={{
                                        textAlign:'left',
                                    }}
                                >
                                    <TableCell
                                            colSpan={2}
                                    >
                                    {category.appendice.map((apd)=>(
                                        
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    ml:3,
                                                }}
                                            >
                                                {apd}
                                            </Typography>
                                
                                    ))}
                                    </TableCell>
                                </TableRow>
                            }
                            </TableBody>
                            
                        </Table>
                    </div>

                </Box>
        </Paper>
    );

}