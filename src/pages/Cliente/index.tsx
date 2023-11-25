
import axios from 'axios';

import { useEffect, useState } from 'react';
import { ICliente } from 'types/ICliente';
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@mui/material';
import CadastroCliente from './CadastroCliente';
import { Link } from 'react-router-dom';
import ListagemCliente from './ListagemCliente';



export default function Cliente() {

    const [clientes, setClientes] = useState <ICliente[]>([]);
    const [cliente, setCliente] = useState <ICliente> ();
    

    useEffect(() => {
        axios.get('http://localhost:8082/clinicar/clientes')
            .then(resposta => {
                setClientes(resposta.data);
            }).catch(error =>
                console.log(error)
            );
    }, []);

 

    return (
        <div>            
            <ListagemCliente />            
        </div>
    );
}