import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Button,
  Grid,
} from "@mui/material";

const CardTerapeuta = ({ terapeuta, onViewProfile }) => {
  const handleButtonClick = () => {
    if (onViewProfile) {
      onViewProfile(terapeuta);
    }
  };

  return (
    <Grid item xs={12}>
      <Card
        variant="outlined"
        sx={{
          minHeight: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "center" },
            height: "100%",
            justifyContent: "space-between",
            p: 2,
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              mb: { xs: 2, md: 0 },
              mr: { xs: 0, md: 3 },
              flexGrow: 1,
            }}
          >
            <Avatar
              alt={terapeuta.name}
              sx={{ width: 56, height: 56, mr: 2, flexShrink: 0 }}
            />
            <Box sx={{ flexGrow: 1, minWidth: 0 }}>
              <Typography variant="h6">{terapeuta.name}</Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {terapeuta.approach}
              </Typography>
            </Box>
          </Box>

          <Button
            size="small"
            variant="contained"
            color="secondary"
            fullWidth={true}
            onClick={handleButtonClick}
            sx={{
              width: { md: "auto" },
              mt: { xs: 1, md: 0 },
              fontSize: { xs: "0.7rem", md: "0.8rem" },
              color: "white",
              borderRadius: "50px",
            }}
          >
            Ver Perfil
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardTerapeuta;
