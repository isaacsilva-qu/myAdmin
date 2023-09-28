import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './Login'
import { Admin } from './Admin'
import { Home } from './Home';
import { Dashboard } from "./Admin/modules/Dasboard"
import { Post } from "./Admin/modules/Post"
import { Usuarios } from "./Admin/modules/Usuarios"
import { Configuracoes } from "./Admin/modules/Conguracoes"

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />

                <Route path="/admin" element={<Admin />}>
                        <Route path="dashboard" element={<Dashboard />}/>
                        <Route path="post" element={<Post />}/>
                        <Route path="usuarios" element={<Usuarios />}/>
                        <Route path="configuracoes" element={<Configuracoes />}/>   
                </Route>
            </Routes>
        </BrowserRouter>
    )
}