import "./App.css";
import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UsuarioProvider } from "./providers/UsuarioProvider";
import Login from "./pages/LoginPage";
import Cadastro from "./pages/CadastroPage";

import DashboardPaciente from "./pages/DashboardPacientePage";
import DashboardTerapeuta from "./pages/DashboardTerapeutaPage";
import FiltrarTerapeuta from "./components/FiltrarTerapeuta";
import Footer from "./components/Footer";

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
            maxWidth: { xs: "100%", sm: 720, md: 1024 },
            mx: "auto",
            margin: "0 auto",
            pb: "60px",
          }}
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/dashboard-paciente" element={<DashboardPaciente />} />
            <Route
              path="/dashboard-terapeuta"
              element={<DashboardTerapeuta />}
            />
            <Route path="/filtrar-terapeuta" element={<FiltrarTerapeuta />} />
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </UsuarioProvider>
  );
}

export default App;
