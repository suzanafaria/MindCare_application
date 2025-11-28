import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useUsuario } from "../providers/UsuarioProvider";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { usuario } = useUsuario();
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ width: "100%", mx: "auto" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Box
            component="img"
            src={require("../assets/Logomarca_App_MindCare.png")}
            alt="Logo MindCare"
            sx={{ width: 50, borderRadius: "50%" }}
          />
          {usuario && (
            <Typography>
              Bem vindo, <strong>{usuario.name}!</strong>
            </Typography>
          )}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button color="inherit" onClick={() => navigate("/login")}>
            VOLTAR
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
