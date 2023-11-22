
import axios from 'axios';

import { useEffect, useState } from 'react';
import { ICliente } from 'types/ICliente';
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@mui/material';
import CadastroCliente from './CadastroCliente';
import { Link } from 'react-router-dom';



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
            <TableContainer component={Paper}>
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>CPF</TableCell>
                        <TableCell>Cor</TableCell>
                        <TableCell>Estado Cívil</TableCell>
                        <TableCell>Sexo</TableCell>
                        <TableCell>Pai</TableCell>
                        <TableCell>Mãe</TableCell>
                        <TableCell>Data de Nascimento</TableCell>
                        <TableCell>Ediitar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clientes && clientes.map((cliente) => (
                        <TableRow key={cliente.id}>
                            <TableCell>{cliente.nome}</TableCell>
                            <TableCell>{cliente.cpf}</TableCell>
                            <TableCell>{cliente.cor}</TableCell>
                            <TableCell>{cliente.estadoCivil}</TableCell>
                            <TableCell>{cliente.sexo}</TableCell>
                            <TableCell>{cliente.pai}</TableCell>
                            <TableCell>{cliente.mae}</TableCell>
                            <TableCell>{cliente?.dataNascimento}</TableCell>                            
                        </TableRow>
                    ))}
                </TableBody>
            </TableContainer>
            
        </div>
    );
}