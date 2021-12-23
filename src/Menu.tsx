import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Toolbar from '@mui/material/Toolbar';
import { DEFAULT_LIST } from "./list";

const drawerWidth = 240;
interface MenuProps {
    container: (() => HTMLElement) | undefined,
    open: boolean,
    onClose: () => void,
    openFormFunction: () => void
}
export default function Menu(props: MenuProps) {
    const [currentList, setCurrentList] = useState<Array<any>>(DEFAULT_LIST);
    const [rootList, setRootList] = useState<Array<any>>([]);

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {rootList.length !== 0 && (
                    <ListItem button onClick={() => {
                        setCurrentList(DEFAULT_LIST);
                        setRootList([]);
                    }}>
                        <ListItemText primary="Back to main menu" />
                        <ChevronLeftIcon />
                    </ListItem>)}
                {currentList.map((item, index) => {
                    const { text, children } = item;
                    if (text === "Login") {
                        return (
                            <ListItem id="login" button key={text} onClick={props.openFormFunction} >
                                <ListItemText primary={text} />
                            </ListItem>
                        );
                    }
                    else {
                        return (
                            <ListItem button key={text} onClick={() => {
                                if (children) {
                                    setRootList(currentList);
                                    setCurrentList(children);
                                }
                            }} >
                                <ListItemText primary={text} />
                                {children && <ChevronRightIcon />}
                            </ListItem>

                        );
                    }
                })
                }
            </List>
        </div>
    );

    return (<div>
        <Drawer
            container={props.container}
            variant="temporary"
            open={props.open}
            onClose={props.onClose}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
        >
            {drawer}
        </Drawer>
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
        >
            {drawer}
        </Drawer>
    </div>
    );
}