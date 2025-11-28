import { Box, Typography, Paper, Icon } from "@mui/material";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { useUsuario } from "../providers/UsuarioProvider";
import Navbar from "../components/NavBar";

export default function DashboardTerapeuta() {
  const { usuario, perfil } = useUsuario();

  return (
    <>
      <Navbar />
      <Box sx={{ p: 4 }}>
        <Paper sx={{ p: 3, mt: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 8 }}>
            <Typography variant="h6">Informações do Usuário</Typography>
            <Icon as={ModeEditOutlinedIcon} sx={{ cursor: "pointer" }} />
          </Box>

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
            <strong>Approach:</strong> {usuario.approach}
          </Typography>
          <Typography>
            <strong>Perfil:</strong> {perfil}
          </Typography>
        </Paper>
      </Box>
    </>
  );
}
