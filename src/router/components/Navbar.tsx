import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { ToggleTheme } from '../../ui/components/ToggleTheme';


export const Navbar = () => {

    
    const navigate = useNavigate();
    const setIsLogged = useAuthStore((store) => store.setIsLogged);
    
    
    const handleLogout = () => {
        setIsLogged(false);
        navigate("/ingresar", {
            replace: true
        })
    }

    return (
        <nav className="p-4 bg-black text-white flex flex-row gap-6">

            <NavLink
                className={({ isActive }) => isActive ? "text-red-500" : ""}
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) => isActive ? "text-red-500" : ""}
                to="/Admin"
            >
                Admin
            </NavLink>

            <NavLink
                className={({ isActive }) => isActive ? "text-red-500" : ""}
                to="/perfil"
            >
                Perfil
            </NavLink>
            <div>
                <ToggleTheme/>
            </div>
            <button
                className=""
                onClick={handleLogout}
            >
                Logout
            </button>
        </nav>
    )
}