import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { Separator } from '../../ui/components/Separator'

export const Header = () => {

    const user = useAuthStore((store) => store.user);

    return (
        <>
            <header className='mx-6 flex justify-between items-center'>
                <div>
                    <h3 className='font-bold text-3xl'>Bienvenido {user?.nombre}</h3>
                    <span className='block text-xl italic'>{user?.rol}</span>
                </div>
                <div>
                    <div className='w-16 h-16 rounded-full bg-primary shadow-lg border-4 border-secondary'>
                        <img alt="avatar" src={user?.foto} className='w-full h-full rounded-full' />
                    </div>
                </div>
            </header>
            <Separator className='mt-10 md:mb-4' />
            <ul className='flex md:hidden gap-4 mb-6'>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? "text-textPrimary" : "text-textSecondary"}
                        to="/"
                    >
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? "text-textPrimary" : "text-textSecondary"}
                        to="/admin"
                    >
                        Admin
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? "text-textPrimary" : "text-textSecondary"}
                        to="/perfil"
                    >
                        perfil
                    </NavLink>
                </li>
            </ul>
        </>
    )
}
