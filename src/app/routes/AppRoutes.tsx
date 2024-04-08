import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { Admin } from '../pages/Admin'
import { NotFound } from '../pages/NotFound'
import { BaseLayout } from '../components/BaseLayout'

export const AppRoutes = () => {
    return (
        <BaseLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/perfil" element={<Profile />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BaseLayout>
    )
}
