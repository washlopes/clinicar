import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import { useEffect, useState } from 'react';
import api from 'services';
import { ICliente } from 'types/ICliente';

export default function ListagemCliente() {

    const [clientes, setClientes] = useState <ICliente[]> ([]);

    useEffect(() => {
        api.get<ICliente[]>('clientes')
            .then((resposta) => {
                setClientes(resposta.data);
            }
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