import { Add, PersonAdd } from '@mui/icons-material';
import {  Collapse, Drawer, List, ListItem, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography } from '@mui/material';
import { useState } from 'react';


export default function Menu() {

    const [aberto, setAberto] = useState(true);
    const [segundoNivelAberto, setSegundoNielAberto] = useState(false);
    
    const handleClick = () => {
        setAberto(!aberto);
    };

    const handleClickSegundoNivel = () => {
        setSegundoNielAberto(!segundoNivelAberto);
    };

    return (
        <>
            <Drawer open={true} variant='permanent' anchor='top'>
                <MenuList sx={{display: 'flex', alignItems: 'left', justifyContent: 'left'}}>
                    <MenuItem  >
                        <ListItem  onClick={handleClick} sx={{display: 'flex', alignItems: 'left', justifyContent: 'left'}}>
                            <ListItemIcon>
                                <Add fontSize='small' />
                            </ListItemIcon>
                            <ListItemText primary='Cadastrar' />
                            <Collapse in={aberto} timeout='auto' unmountOnExit>
                                <List component='div' disablePadding >
                                    <ListItem onClick={handleClickSegundoNivel}>
                                        <ListItemIcon>
                                            <PersonAdd fontSize='small'></PersonAdd>
                                        </ListItemIcon>
                                        <ListItemText primary='cliente' />
                                    </ListItem>
                                </List>
                            </Collapse>
                        </ListItem>                        
                    </MenuItem>
                </MenuList>
            </Drawer>
        </>
        
    );
}