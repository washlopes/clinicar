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
            <Paper elevation={3} sx={{margin: 2, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>               
                <TableContainer >
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
                            <TableCell>Ações</TableCell>
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
                                <TableCell>{new Date(cliente.dataNascimento).toLocaleDateString('pt-BR', {
                                    timeZone: 'UTC'
                                })}</TableCell> 
                                <TableCell>
                                    <Link to={`atendimento/${cliente.codigo}`}><Button variant='outlined' sx={{margin: 1}}>Atendimento</Button> </Link>
                                </TableCell>                           
                            </TableRow>
                        ))}
                    </TableBody>
                </TableContainer>
            </Paper>          
        </div>
    );
}