import { Outlet } from 'react-router-dom';

export default function PaginaPadrao() {
    return (
        <>
            <div>
                <Outlet />
            </div>
        </>
    );
}