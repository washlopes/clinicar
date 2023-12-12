import { Box, Button, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

import React, { useEffect, useState } from 'react';
import { ICliente } from 'types/ICliente';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import { useParams } from 'react-router-dom';
import api from 'services';
import Swal from 'sweetalert2';


// declare interface InitialClienteState {
//         nome: '',
//         cpf: 0,
//         cor: '',
//         estadoCivil: '',
//         sexo: '',
//         dataNascimento: '',        
//         pai: '',
//         mae: '',
//         profissao: '',
//         indicacao: '',
//         endereco: '',
//         numero: 0,
//         complemento: '',
//         bairro: '',
//         municipio: '',
//         uf: '',
//         cep: '',
//         telefoneResidencial: '',
//         telefoneComercial: '',
//         telefoneCelular: '',
//         email: ''

//     }

export default function CadastroCliente() {   

    const [data, setData] = useState <string | null> ('');

    const [cliente, setCliente] = useState <ICliente>  ({
        nome: '',
        cpf: 0,
        cor: '',
        estadoCivil: '',
        sexo: '',
        dataNascimento: new Date(),        
        pai: '',
        mae: '',
        profissao: '',
        indicacao: '',
        endereco: '',
        numero: 0,
        complemento: '',
        bairro: '',
        municipio: '',
        uf: '',
        cep: '',
        telefoneResidencial: '',
        telefoneComercial: '',
        telefoneCelular: '',
        email: ''
    });    

    const parametros = useParams ();


    useEffect(() => {

        if (parametros.codigo !== 'novo') {
            
            api.get<ICliente>(`clientes/codigo/${parametros.codigo}`)
                .then((resposta) => {                
                    setCliente(resposta.data);
                });

            // const dataCliente = ;

            setData(cliente.dataNascimento && cliente.dataNascimento.toString());

        } else {
            setCliente({
                nome: '',
                cpf: 0,
                cor: '',
                estadoCivil: '',
                sexo: '',
                dataNascimento: new Date(),        
                pai: '',
                mae: '',
                profissao: '',
                indicacao: '',
                endereco: '',
                numero: 0,
                complemento: '',
                bairro: '',
                municipio: '',
                uf: '',
                cep: '',
                telefoneResidencial: '',
                telefoneComercial: '',
                telefoneCelular: '',
                email: ''

            });

            console.log(cliente);
        }
        
    }, [parametros]);

    const handleInputChange = ((evento: React.ChangeEvent <HTMLInputElement>) => {
        const  {name, value} = evento.target;

        setCliente({
            ...cliente,
            [name]: value
        });
    });

    const handleSelectChange = ((evento: SelectChangeEvent) => {
        const {name, value} = evento.target;

        setCliente({
            ...cliente,
            [name]: value
        });
    });  
    
    const handleDateChange = ((novaData: Date | null) => {
        setCliente({
            ...cliente,
            dataNascimento: novaData
        });
    });
    
    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();       
        
        api.post<ICliente>('clientes', cliente)
            .then((resposta) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Cadastro',
                    text: 'Cliente ' + resposta.data.nome + ' cadastrado com sucesso'
                });
            }).catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro',
                    text: error
                });
            });
            
    };

    return (        
        <Box component='form' onSubmit={aoSubmeterForm}>
            <div >
                <TextField 
                    name='nome'
                    value={cliente && cliente.nome}                    
                    id="cliente"                
                    label='Nome:'
                    placeholder='Informe o nome do cliente'
                    onChange={handleInputChange}
                    variant='filled'  size='small' sx={{width: 570, margin: 1, padding: 1}}
                />
                <TextField 
                    name='cpf'
                    value={cliente && cliente.cpf}                    
                    id="cpf"                
                    label='CPF:'
                    placeholder='Informe o nome do cliente'
                    onChange={handleInputChange}
                    variant='filled'  size='small' sx={{width: 150, margin: 1, padding: 1}}
                />
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'left'}}>
                    <InputLabel id='cor' sx={{margin: 1 }}>Cor</InputLabel>
                    <Select
                        name='cor'
                        labelId='cor'
                        id="cor"
                        value={cliente && cliente.cor}
                        variant='filled'
                        fullWidth     
                        onChange={handleSelectChange}                   
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
                        name='estadoCivil'
                        labelId='estadoCivil'
                        id="estadoCivil"
                        value={cliente.estadoCivil}
                        variant='filled'
                        fullWidth
                        onChange={handleSelectChange}
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
                        name='sexo'
                        labelId='sexo'
                        id='sexo'
                        value={cliente.sexo}
                        variant='filled'
                        fullWidth
                        onChange={handleSelectChange}
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
            
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt-BR'>
                <DatePicker   
                    value={new Date(data)}                  
                    onChange={(novaData: Date | null) => handleDateChange(novaData) } 
                    label='Data Nasc.'  format='DD/MM/YYYY' sx={{margin: 1}} />
            </LocalizationProvider>
                            
            <div>
                <TextField 
                    name='pai'
                    value={cliente && cliente.pai}                    
                    id="pai"                
                    label='Pai:'
                    placeholder='Informe o nome do cliente'
                    onChange={handleInputChange}
                    variant='filled'  size='small' sx={{width: 570, margin: 1, padding: 1}}
                />
                <TextField 
                    name='mae'
                    value={cliente && cliente.mae}                    
                    id="mae"                
                    label='Mãe::'
                    placeholder='Informe o nome do cliente'
                    onChange={handleInputChange}
                    variant='filled'  size='small' sx={{width: 570, margin: 1, padding: 1}}
                />
            </div>             
            <TextField 
                name='profissao'
                value={cliente && cliente.profissao}                
                id="profissao"                
                label='Profissão:'
                placeholder='Informe o nome do cliente'
                onChange={handleInputChange}
                variant='filled'  size='small'  sx={{margin: 1, padding: 1}}
            />
            <TextField 
                name='indicacao'
                value={cliente && cliente.indicacao}                
                id="indicacao"                
                label='Indicação:'
                placeholder='Informe o nome do cliente'
                onChange={handleInputChange}
                variant='filled'  size='small' sx={{width: 370, margin: 1, padding: 1}}
            />
            <div>
                <TextField 
                    name='endereco'
                    value={cliente && cliente.endereco}                    
                    id="endereco"                
                    label='Endereço:'
                    placeholder='Informe o nome do cliente'
                    onChange={handleInputChange}
                    variant='filled'  size='small' sx={{width: 570, margin: 1, padding: 1}}
                />
                <TextField 
                    name='numero'
                    value={cliente && cliente.numero}                    
                    id="numero"                
                    label='Número:'
                    placeholder='Informe o nome do cliente'
                    onChange={handleInputChange}
                    variant='filled'  size='small' sx={{width: 90, margin: 1, padding: 1}}
                />
                <TextField 
                    name='complemento'
                    value={cliente && cliente.complemento}                    
                    id="complemento"                
                    label='Complemento:'
                    placeholder='Informe o nome do cliente'
                    onChange={handleInputChange}
                    variant='filled'  size='small' sx={{margin: 1, padding: 1}}
                />
                <TextField 
                    name='bairro'
                    value={cliente && cliente.bairro}                    
                    id="bairro"                
                    label='Bairro:'
                    placeholder='Informe o nome do cliente'
                    onChange={handleInputChange}
                    variant='filled'  size='small' sx={{margin: 1, padding: 1}}
                />
                <TextField 
                    name='municipio'
                    value={cliente && cliente.municipio}                    
                    id="municipio"                
                    label='Municipio:'
                    placeholder='Informe o nome do cliente'
                    onChange={handleInputChange}
                    variant='filled'  size='small' sx={{width: 570, margin: 1, padding: 1}}
                />
                <TextField 
                    name='uf'
                    value={cliente && cliente.uf}                    
                    id="uf"                
                    label='UF:'
                    placeholder='Informe o nome do cliente'
                    onChange={handleInputChange}
                    variant='filled'  size='small' sx={{width: 70, margin: 1, padding: 1}}
                />
                <TextField 
                    name='cep'
                    value={cliente && cliente.cep}                    
                    id="cep"                
                    label='CEP:'
                    placeholder='Informe o nome do cliente'
                    onChange={handleInputChange}
                    variant='filled'  size='small' sx={{width: 120, margin: 1, padding: 1}}
                />
            </div>            
            <TextField 
                name='telefoneResidencial'
                value={cliente && cliente.telefoneResidencial}                
                id="residencial"                
                label='Tel. Residencial:'
                placeholder='Informe o nome do cliente'
                onChange={handleInputChange}
                variant='filled'  size='small' sx={{width: 150, margin: 1, padding: 1}}
            />
            <TextField 
                name='telefoneComercial'
                value={cliente && cliente.telefoneComercial}                
                id="comercial"                
                label='Tel. Comercial:'
                placeholder='Informe o nome do cliente'
                onChange={handleInputChange}
                variant='filled'  size='small' sx={{width: 150, margin: 1, padding: 1}}
            />
            <TextField 
                name='telefoneCelular'
                value={cliente && cliente.telefoneCelular}                
                id="celular"                
                label='Tel. Celular:'
                placeholder='Informe o nome do cliente'
                onChange={handleInputChange}
                variant='filled'  size='small' sx={{width: 315, margin: 1, padding: 1}}
            />
            <TextField 
                name='email'
                value={cliente && cliente.email}                
                id="email"                
                label='Email:'
                placeholder='Informe o nome do cliente'
                onChange={handleInputChange}
                variant='filled'  size='small' sx={{width: 370, margin: 1, padding: 1}}
            />
            <div>
                <Button type='submit' variant='outlined' sx={{margin: 1}}>Cadastrar</Button>
            </div>          
        </Box>
    );
}