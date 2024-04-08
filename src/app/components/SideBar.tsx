import { useState } from 'react'
import { ToggleTheme } from '../../ui/components/ToggleTheme'
import { NavLink } from 'react-router-dom'
import { Separator } from '../../ui/components/Separator'
import { ArrowIcon } from '../../ui/icons/ArrowIcon'
import { GradientButton } from '../../ui/components/GradientButton'
import { useAuthStore } from '../../store/authStore'

export const SideBar = () => {

    const [sidebarFull, setSidebarFull] = useState<boolean>(true);

    const logout = useAuthStore((store) => store.logout);

    return (
        <aside className={
            `hidden md:flex min-h-[100vh] bg-accent border-l border-border shadow shadow-black relative
            transition-all duration-700 
            ${sidebarFull ? "w-72" : "w-48"}
            `}>
            <ul className='p-4 w-full h-full pt-24 text-white'>
                <ToggleTheme />
                <li className='w-full text-2xl font-bold my-4 
                '>
                    <NavLink
                        className={({ isActive }) => isActive ? "text-textPrimary" : "text-[rgba(255,255,255,0.5)]"}
                        to="/"
                    >
                        Inicio
                    </NavLink>
                    <Separator className='mt-4' />
                </li>
                <li className='w-full text-2xl font-bold my-4
                '>
                    <NavLink
                        className={({ isActive }) => isActive ? "text-textPrimary" : "text-[rgba(255,255,255,0.5)]"}
                        to="/admin"
                    >
                        Administracion
                    </NavLink>
                    <Separator className='mt-4' />
                </li>
                <li className='w-full text-2xl font-bold my-4
                '>
                    <NavLink
                        className={({ isActive }) => isActive ? "text-textPrimary" : "text-[rgba(255,255,255,0.5)]"}
                        to="/perfil"
                    >
                        Perfil
                    </NavLink>
                    <Separator className='mt-4' />
                </li>

                <li>
                    <GradientButton onClick={logout} text='Cerrar sesion' />
                </li>
            </ul>

            <button
                onClick={() => { setSidebarFull(!sidebarFull) }}
                className='absolute top-0 bottom-0 m-auto h-16 w-16 rounded-full -right-6 
                bg-accent shadow-xl text-white items-center justify-center'>
                <div className={`transition-all duration-700 ${!sidebarFull && "rotate-180"}`}>
                    <ArrowIcon />
                </div>
            </button>
        </aside>
    )
}
