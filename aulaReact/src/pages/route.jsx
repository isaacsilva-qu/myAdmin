import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './Login'
import { Admin } from './Admin'
import { Home } from './Home';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    )
}