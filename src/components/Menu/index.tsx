import { Button } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Menu() {

    return (
        <>
            <Link to='cliente/novo'>
                <Button>
                    Cadastrar Cliente
                </Button>
            </Link>
        </>
        
    );
}