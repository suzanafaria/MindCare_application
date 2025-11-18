import { Box, Typography, Paper } from "@mui/material";
import { useUsuario } from "../providers/UsuarioProvider";
import Navbar from "./NavBar";

export default function Dashboard() {
  const { usuario, perfil } = useUsuario();

  return (
    <>
      <Navbar />
      <Box sx={{ p: 4 }}>
        <Paper sx={{ p: 3, mt: 2 }}>
          <Typography variant="h6">Informações do Usuário</Typography>
          <Typography>
            <strong>Nome:</strong> {usuario.name}
          </Typography>
          <Typography>
            <strong>Email:</strong> {usuario.email}
          </Typography>
          <Typography>
            <strong>Idade:</strong> {usuario.idade}
          </Typography>
          <Typography>
            <strong>Perfil:</strong> {perfil}
          </Typography>
        </Paper>
      </Box>
    </>
  );
}
