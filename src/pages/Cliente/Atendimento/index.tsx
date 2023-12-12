import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Atendimento() {

    const parametros = useParams ();

    useEffect(() => {
        if (parametros.codigo) {
            Swal.fire({
                icon: 'success',
                title: 'Atendimento',
                text: 'Cheguei no atendimento ' + parametros.codigo
            });
        }
    }, [parametros]);

    return (<Box>
        <p>Teste</p>
    </Box>);
}