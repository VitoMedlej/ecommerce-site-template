"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { IoCloseOutline } from "react-icons/io5";
import { useCategoriesContext, useSidebarContext } from '@/Utils/Context/Contexts';
import { Collapse } from '@mui/material';
import { IoMdArrowDropdown } from "react-icons/io";
import Btn from '../Btn/Btn';
import SMicons from '../SMicons/SMicons';

interface Category {
    title: string;
    subcategories?: string[];
}

export default function SideBar() {
    const { sidebarOpen, setSidebarOpen } = useSidebarContext();
    const { categories } = useCategoriesContext();
    
    const [expandedCategory, setExpandedCategory] = React.useState<string | null>(null);

    const toggleDrawer = (newOpen: boolean) => () => {
        setSidebarOpen(newOpen);
    };

    const handleToggle = (categoryTitle: string) => {
        setExpandedCategory((prev) =>
            prev === categoryTitle ? null : categoryTitle
        );
    };

    const DrawerList = (
        <Box sx={{ width: '100vw' }} role="presentation">
            <Box sx={{ px: 0, my: 1 }} className="flex justify-between">
                <Btn onClick={() => setSidebarOpen(false)} sx={{ px: 0 }}>
                    <IoCloseOutline color='red' fontSize='3em' />
                </Btn>
            </Box>

            <Divider />

            <List>
                {categories.map((category: Category) => (
                    <React.Fragment key={category.title}>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleToggle(category.title)}>
                                <ListItemText
                                sx={{
                                    'span':{

                                        fontWeight:'600'
                                    }

                                }}
                                primary={category.title} />
                                {category.subcategories && (
                                    <IoMdArrowDropdown
                                        fontSize="1.5em"
                                        style={{
                                            transform: expandedCategory === category.title ? 'rotate(180deg)' : 'none',
                                            transition: 'transform 0.3s',
                                        }}
                                    />
                                )}
                            </ListItemButton>
                        </ListItem>
                        
                        {category.subcategories && (
                            <Collapse in={expandedCategory === category.title} timeout="auto" unmountOnExit>
                                <List sx={{ pl: 4 }}>
                                    {category.subcategories.map((subcategory: string) => (
                                        <ListItem key={subcategory} disablePadding>
                                            <ListItemButton>
                                                <ListItemText primary={subcategory} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        )}
                    </React.Fragment>
                ))}
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
            <Drawer anchor='right' open={sidebarOpen} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
