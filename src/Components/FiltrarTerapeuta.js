import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";

const FiltrarTerapeuta = () => {
  const [terapeutas, setTerapeutas] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTerapeutas = async () => {
      try {
        const response = await fetch("/data/terapeutas.json");
        if (!response.ok) {
          throw new Error("Erro ao buscar terapeutas");
        }
        const data = await response.json();
        setTerapeutas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTerapeutas();
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        {terapeutas.length} Terapeutas Disponíveis
      </Typography>
    </Container>
  );
};

export default FiltrarTerapeuta;
