import { ReactComponent as Logo} from 'assets/logo.svg';
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const navegacao = useNavigate();

    return (
        <div>
            <Logo onClick={() => {
                return navegacao('clinicar/cliente');
            }}/>
            <h1>
                Gerenciador de Clínicas
            </h1>
        </div>
    );
}