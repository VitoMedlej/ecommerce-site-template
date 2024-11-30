"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {IoCloseOutline} from "react-icons/io5";
import Btn from '../Btn/Btn';
import CountryPicker from '../CountryPicker/CountryPicker';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import {IoMdArrowDropdown} from "react-icons/io";
import { Collapse} from '@mui/material';
import SMicons from '../SMicons/SMicons';
import { useSidebarContext } from '@/app/Utils/Context/Contexts';


export default function SideBar() {
    const { sidebarOpen, setSidebarOpen } = useSidebarContext();


    const toggleDrawer = (newOpen : boolean) => () => {
        setSidebarOpen(newOpen);
    };
    const [expanded,
        setExpanded] = React.useState(false);

    const DrawerList = (
        <Box sx={{
            width: '100vw'
        }} role="presentation">
            <Box
                sx={{
                px: 0,
                my: 1
            }}
                className="flex justify-between">

                <Box
                    sx={{
                    display: {
                        xs: 'flex'
                    }
                }}
                    className=' row'>
                    <LanguageSelector/>
                    <CountryPicker/>
                </Box>
                <Btn 
                    onClick={()=>setSidebarOpen(false)}
                
                sx={{
                    px: 0
                }}>
                    <IoCloseOutline color='red' fontSize='3em'/>
                </Btn>
            </Box>

            <Divider/>

            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem disablePadding>
                    <ListItemButton onClick={() => setExpanded(!expanded)}>
                        <ListItemText primary="Expandable Item"/>
                        <IoMdArrowDropdown
                            fontSize="1.5em"
                            style={{
                            transform: expanded
                                ? 'rotate(180deg)'
                                : 'none',
                            transition: 'transform 0.3s'
                        }}/>
                    </ListItemButton>
                </ListItem>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <List sx={{
                        pl: 4
                    }}>
                        {['Subitem 1', 'Subitem 2'].map((subtext) => (
                            <ListItem key={subtext} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={subtext}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
            </List>

            <Box sx={{
                px: 1,
                mt: 4
            }}>

                <SMicons/>
            </Box>
        </Box>
    );

    return (
        <div>
         
            <Drawer  anchor='right' open={sidebarOpen} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}

