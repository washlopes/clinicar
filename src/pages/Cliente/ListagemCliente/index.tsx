import { Box, Button, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from 'services';
import { ICliente } from 'types/ICliente';

export default function ListagemCliente() {

    const [clientes, setClientes] = useState <ICliente[]> ([]);
    const [nome, setNome] = useState('');

    useEffect(() => {
        api.get<ICliente[]>('clientes')
            .then((resposta) => {
                setClientes(resposta.data);
            }
            );
    }, []);

    /* useEffect(() => {

        if (nome.length > 0) {
            api.get<ICliente[]>(`clientes/nome/${nome}`)
                .then((resposta) => {
                    setClientes(resposta.data);
                });
        }
        
    }, [nome]); */

    const handleClientes = ((evento : React.ChangeEvent<HTMLInputElement>) => {
        evento.preventDefault;        
        
        const clientesFiltrados = clientes.filter((cliente) => {
            cliente.nome === nome;
        }) ;

        setClientes(clientesFiltrados);
        
    }); 

    return (
        <div>
            <Box component='form' onSubmit={handleClientes}>
                <TextField
                    label='Informar nome ou parte do nome:'
                    size='small'
                    value={nome}
                    onChange={evento => setNome(evento.target.value)}
                />
                <Button type='submit'>Filtrar</Button>
            </Box>
            
            

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
                        <TableRow key={cliente.codigo}>
                            <TableCell>
                                <Link to={`${cliente.codigo}`} >
                                    {cliente.nome}
                                </Link>
                            </TableCell>
                            <TableCell>{cliente.cpf}</TableCell>
                            <TableCell>{cliente.cor}</TableCell>
                            <TableCell>{cliente.estadoCivil}</TableCell>
                            <TableCell>{cliente.sexo}</TableCell>
                            <TableCell>{cliente.pai}</TableCell>
                            <TableCell>{cliente.mae}</TableCell>
                            <TableCell>{cliente?.dataNascimento?.toString()}</TableCell>                            
                        </TableRow>
                    ))}
                </TableBody>
            </TableContainer>
            
        </div>
    );
}