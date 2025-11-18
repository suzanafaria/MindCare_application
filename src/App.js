import "./App.css";
import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UsuarioProvider } from "./providers/UsuarioProvider";
import Login from "./components/LoginPage";
import Cadastro from "./components/CadastroPage";
import Dashboard from "./components/Dashboard";
import FiltrarTerapeuta from "./components/FiltrarTerapeuta";

function App() {
  return (
    <UsuarioProvider>
      <BrowserRouter>
        <Container
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: 2,
            maxWidth: "1200 px",
            margin: "0 auto",
          }}
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/filtrar-terapeuta" element={<FiltrarTerapeuta />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </UsuarioProvider>
  );
}

export default App;
