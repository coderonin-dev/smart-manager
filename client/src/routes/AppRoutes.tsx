import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Autenticação */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Área protegida */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Redirecionamento padrão */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Qualquer rota inexistente */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}