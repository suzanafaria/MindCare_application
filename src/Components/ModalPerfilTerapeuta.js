import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Avatar,
  Box,
  Divider,
} from "@mui/material";

const ModalPerfilTerapeuta = ({ open, handleClose, terapeuta }) => {
  if (!terapeuta) return null;

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogContent sx={{ textAlign: "center", p: 2 }}>
        <Avatar
          alt={terapeuta.name}
          sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
        />
        <Typography variant="h5" component="div" gutterBottom>
          {terapeuta.name}
        </Typography>
        <Typography variant="subtitle1" color="primary" sx={{ mb: 2 }}>
          {terapeuta.approach}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Box sx={{ textAlign: "left" }}>
          <Typography variant="body1">
            <strong>E-mail:</strong> {terapeuta.email}
          </Typography>
          <Typography variant="body1">
            <strong>Idade:</strong> {terapeuta.idade} anos
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ m: 2 }}>
        <Button onClick={handleClose} color="secondary">
          Fechar
        </Button>
        <Button variant="contained" color="primary" autoFocus>
          Agendar Consulta
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalPerfilTerapeuta;
