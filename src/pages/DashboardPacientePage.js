import React, { useState } from "react";
import { Box, Typography, Paper, Button, Icon } from "@mui/material";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useUsuario } from "../providers/UsuarioProvider";
import Navbar from "../components/NavBar";
import FiltrarTerapeuta from "../components/FiltrarTerapeuta";

export default function DashboardPaciente() {
  const { usuario, perfil } = useUsuario();

  const [showFilter, setShowFilter] = useState(false);

  const handleToggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Navbar />
        <Box
          sx={{
            p: 4,
            maxWidth: { xs: "100%", sm: 600, md: 800 },
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              p: 3,
              mt: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 8,
              }}
            >
              <Typography id="headerCardPaciente" variant="h6">
                Informações do Usuário
              </Typography>
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
              <strong>Perfil:</strong> {perfil}
            </Typography>
          </Paper>
        </Box>
        <Button
          sx={{
            mb: 5,
            mx: "auto",
            display: "flex",
            alignItems: "center",
            width: "250px",
            borderRadius: "50px",
            color: "white",
          }}
          variant="contained"
          onClick={handleToggleFilter}
          endIcon={<SearchOutlinedIcon />}
        >
          {showFilter ? "Fechar Filtros" : "Buscar Terapeuta"}
        </Button>

        {showFilter && (
          <Box sx={{ mt: 2, width: "100%", mx: "auto" }}>
            <FiltrarTerapeuta />
          </Box>
        )}
      </Box>
    </>
  );
}
