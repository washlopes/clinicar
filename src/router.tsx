
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Atendimento from 'pages/Cliente/Atendimento';
import CadastroCliente from 'pages/Cliente/CadastroCliente';
import ListagemCliente from 'pages/Cliente/ListagemCliente';
import Inicio from 'pages/Inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path='/' element={<PaginaPadrao />} >
                    <Route index element={<Inicio />} />
                    <Route path='cliente' element={<ListagemCliente />} />
                    <Route path='cliente/:codigo' element={<CadastroCliente/>} />
                    <Route path='cliente/atendimento/:codigo' element={<Atendimento />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}