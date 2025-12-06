import React, { useState, useEffect, useMemo } from "react";
import {
  Alert,
  TextField,
  CircularProgress,
  Container,
  Typography,
  Grid,
  Box,
  Chip,
} from "@mui/material";
import CardTerapeuta from "./CardTerapeuta";
import ModalPerfilTerapeuta from "./ModalPerfilTerapeuta";

const FiltrarTerapeuta = () => {
  const [terapeutas, setTerapeutas] = useState([]);
  const [selectedApproach, setSelectedApproach] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTerapeuta, setSelectedTerapeuta] = useState(null);

  const handleOpenModal = (terapeuta) => {
    setSelectedTerapeuta(terapeuta);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTerapeuta(null);
  };

  useEffect(() => {
    const fetchTerapeutas = async () => {
      try {
        const response = await fetch("/data/terapeutas.json");
        if (!response.ok) {
          throw new Error("Erro ao carregadas dados dos terapeutas");
        }
        const data = await response.json();
        setTerapeutas(data);
      } catch (err) {
        setError("Não foi possível carregar a lista de terapeutas.");
      } finally {
        setLoading(false);
      }
    };
    fetchTerapeutas();
  }, []);

  const uniqueApproaches = useMemo(() => {
    const approachesSet = terapeutas.map((terapeuta) => terapeuta.approach);
    return ["Todos", ...new Set(approachesSet)];
  }, [terapeutas]);

  const filtroTerapeutas = useMemo(() => {
    let lista = terapeutas;
    if (selectedApproach !== "Todos") {
      lista = lista.filter(
        (terapeuta) => terapeuta.approach === selectedApproach
      );
    }
    if (searchTerm.trim() !== "") {
      const lowerCaseSearchTerm = searchTerm.trim().toLowerCase();
      lista = lista.filter(
        (terapeuta) =>
          terapeuta.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          terapeuta.approach.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }
    return lista;
  }, [terapeutas, selectedApproach, searchTerm]);

  if (isLoading) {
    return (
      <Container maxWidth="md" sx={{ mt: 4, textAlign: "center" }}>
        <CircularProgress />
        <Typography>Carregando Terapeutas...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <>
      <Container
        maxWidth="800px"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            mb: 3,
            textAlign: "center",
            fontStyle: "italic",
            fontSize: "1.8rem",
          }}
        >
          Encontre o Terapeuta ideal para Você
        </Typography>
        <TextField
          fullWidth={true}
          label="Buscar por Nome ou E-mail"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 3, width: "100%" }}
        />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            mb: 4,
            pb: 1,
            gap: 2,
            width: "100%",
          }}
        >
          {uniqueApproaches.map((approach) => (
            <Chip
              key={approach}
              label={approach}
              clickable
              color={selectedApproach === approach ? "primary" : "default"}
              variant={selectedApproach === approach ? "filled" : "outlined"}
              onClick={() => setSelectedApproach(approach)}
            />
          ))}
        </Box>

        <Typography variant="h6" gutterBottom>
          {filtroTerapeutas.length} terapeutas encontrados
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{ width: "100%", justifyContent: "center" }}
        >
          {filtroTerapeutas.length > 0 ? (
            filtroTerapeutas.map((terapeuta) => (
              <CardTerapeuta
                key={terapeuta.id}
                terapeuta={terapeuta}
                onViewProfile={handleOpenModal}
              />
            ))
          ) : (
            <Grid item xs={12}>
              <Alert severity="info">
                Nenhum terapeuta encontrado com os filtros aplicados.
              </Alert>
            </Grid>
          )}
        </Grid>
      </Container>
      <ModalPerfilTerapeuta
        open={isModalOpen}
        handleClose={handleCloseModal}
        terapeuta={selectedTerapeuta}
      />
    </>
  );
};

export default FiltrarTerapeuta;
