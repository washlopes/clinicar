import { Box, Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

import React, { useEffect, useState } from 'react';
import { ICliente } from 'types/ICliente';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import { useParams } from 'react-router-dom';
import api from 'services';
export default function CadastroCliente() {

    const [cliente, setCliente] = useState <ICliente>  ();    

    const parametros = useParams ();

    useEffect(() => {

        if (parametros.codigo) {
            
            api.get<ICliente>(`clientes/${parametros.codigo}`)
                .then((resposta) => {                
                    setCliente(resposta.data);
                });
        }
        
    }, [parametros]);

    

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();        

        useEffect(() => {
            if (parametros.codigo) {
                api.put<ICliente>(`cliente/${cliente}`);
            } else {
                api.post<ICliente>(`cliente/${cliente}`);
            }
        },[cliente]);      
    };

    return (
        <form onSubmit={aoSubmeterForm}>
            <div >
                <TextField 
                    value={cliente && cliente.nome}                    
                    id="cliente"                
                    label='Nome:'
                    placeholder='Informe o nome do cliente'
                    variant='filled'  size='small' sx={{width: 570, margin: 1, padding: 1}}
                />
                <TextField 
                    value={cliente && cliente.cpf}                    
                    id="cpf"                
                    label='CPF:'
                    placeholder='Informe o nome do cliente'
                    variant='filled'  size='small' sx={{width: 150, margin: 1, padding: 1}}
                />
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'left'}}>
                    <InputLabel id='cor' sx={{margin: 1 }}>Cor</InputLabel>
                    <Select
                        labelId='cor'
                        id="cor"
                        value={cliente && cliente.cor}
                        variant='filled'
                        label='Cor' size='small' sx={{width: 220, margin: 1, padding: 1 }}
                    >
                        <MenuItem value=''>
                            <em>Selecione...</em>
                        </MenuItem>
                        <MenuItem value='LEUCODERMA'>LEUCODERMA</MenuItem>
                        <MenuItem value='MELANODERMA'>MELANODERMA</MenuItem>
                    </Select>                
                    <InputLabel id='estadoCivil' sx={{margin: 1 }}>Estado Civil</InputLabel>
                    <Select
                        labelId='estadoCivil'
                        id="estadoCivil"
                        value={cliente && cliente.estadoCivil}
                        variant='filled'
                        label='Estado Civil' size='small' sx={{width: 220, margin: 1 , padding: 1}}
                    >
                        <MenuItem value=''>
                            <em>Selecione...</em>
                        </MenuItem>
                        <MenuItem value='CASADO'>CASADO</MenuItem>
                        <MenuItem value='DIVORCIADO'>DIVORCIADO</MenuItem>
                        <MenuItem value='SOLTEIRO'>SOLTEIRO</MenuItem>
                        <MenuItem value='UNIAO_ESTAVEL'>UNIÃO ESTÁVEL</MenuItem>
                        <MenuItem value='VIUVO'>VIÚVO</MenuItem>
                    </Select>
                    <InputLabel id='sexo' sx={{margin: 1 }}>Sexo</InputLabel>
                    <Select
                        labelId='sexo'
                        id='sexo'
                        value={cliente && cliente.sexo}
                        variant='filled'
                        label='Sexo' size='small' sx={{width: 220, margin: 1, padding: 1 }}
                    >
                        <MenuItem value=''>
                            <em>Selecione...</em>
                        </MenuItem>
                        <MenuItem value='FEMININO'>FEMININO</MenuItem>
                        <MenuItem value='MASCULINO'>MASCULINO</MenuItem>                    
                    </Select>
                </Box>               
            </div>
            <InputLabel id='dataNascimento' sx={{margin: 1 }}>Data de Nasc.:</InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt-BR'>
                <DatePicker  label='dataNascimento'  format='DD/MM/YYYY' sx={{margin: 1}} />
            </LocalizationProvider>
                            
            <div>
                <TextField 
                    value={cliente && cliente.pai}                    
                    id="pai"                
                    label='Pai:'
                    placeholder='Informe o nome do cliente'
                    variant='filled'  size='small' sx={{width: 570, margin: 1, padding: 1}}
                />
                <TextField 
                    value={cliente && cliente.mae}                    
                    id="mae"                
                    label='Mãe::'
                    placeholder='Informe o nome do cliente'
                    variant='filled'  size='small' sx={{width: 570, margin: 1, padding: 1}}
                />
            </div>             
            <TextField 
                value={cliente && cliente.profissao}                
                id="profissao"                
                label='Profissão:'
                placeholder='Informe o nome do cliente'
                variant='filled'  size='small'  sx={{margin: 1, padding: 1}}
            />
            <TextField 
                value={cliente && cliente.indicacao}                
                id="indicacao"                
                label='Indicação:'
                placeholder='Informe o nome do cliente'
                variant='filled'  size='small' sx={{width: 370, margin: 1, padding: 1}}
            />
            <div>
                <TextField 
                    value={cliente && cliente.endereco}                    
                    id="endereco"                
                    label='Endereço:'
                    placeholder='Informe o nome do cliente'
                    variant='filled'  size='small' sx={{width: 570, margin: 1, padding: 1}}
                />
                <TextField 
                    value={cliente && cliente.numero}                    
                    id="numero"                
                    label='Número:'
                    placeholder='Informe o nome do cliente'
                    variant='filled'  size='small' sx={{width: 90, margin: 1, padding: 1}}
                />
                <TextField 
                    value={cliente && cliente.complemento}                    
                    id="complemento"                
                    label='Complemento:'
                    placeholder='Informe o nome do cliente'
                    variant='filled'  size='small' sx={{margin: 1, padding: 1}}
                />
                <TextField 
                    value={cliente && cliente.bairro}                    
                    id="bairro"                
                    label='Bairro:'
                    placeholder='Informe o nome do cliente'
                    variant='filled'  size='small' sx={{margin: 1, padding: 1}}
                />
                <TextField 
                    value={cliente && cliente.municipio}                    
                    id="municipio"                
                    label='Municipio:'
                    placeholder='Informe o nome do cliente'
                    variant='filled'  size='small' sx={{width: 570, margin: 1, padding: 1}}
                />
                <TextField 
                    value={cliente && cliente.uf}                    
                    id="uf"                
                    label='UF:'
                    placeholder='Informe o nome do cliente'
                    variant='filled'  size='small' sx={{width: 70, margin: 1, padding: 1}}
                />
                <TextField 
                    value={cliente && cliente.cep}                    
                    id="cep"                
                    label='CEP:'
                    placeholder='Informe o nome do cliente'
                    variant='filled'  size='small' sx={{width: 120, margin: 1, padding: 1}}
                />
            </div>            
            <TextField 
                value={cliente && cliente.telefoneResidencial}                
                id="residencial"                
                label='Tel. Residencial:'
                placeholder='Informe o nome do cliente'
                variant='filled'  size='small' sx={{width: 150, margin: 1, padding: 1}}
            />
            <TextField 
                value={cliente && cliente.telefoneComercial}                
                id="comercial"                
                label='Tel. Comercial:'
                placeholder='Informe o nome do cliente'
                variant='filled'  size='small' sx={{width: 150, margin: 1, padding: 1}}
            />
            <TextField 
                value={cliente && cliente.telefoneCelular}                
                id="celular"                
                label='Tel. Celular:'
                placeholder='Informe o nome do cliente'
                variant='filled'  size='small' sx={{width: 315, margin: 1, padding: 1}}
            />
            <TextField 
                value={cliente && cliente.email}                
                id="email"                
                label='Email:'
                placeholder='Informe o nome do cliente'
                variant='filled'  size='small' sx={{width: 370, margin: 1, padding: 1}}
            />
            <div>
                <Button type='submit' variant='outlined' sx={{margin: 1}}>Cadastrar</Button>
            </div>          
        </form>
    );
}