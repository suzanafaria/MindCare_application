import React from "react";
import { Box, Typography, Container } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        mx: "auto",
        height: "50px",
        backgroundColor: "#cfcfcfaf",
        color: "text.secondary",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: 3,
        zIndex: 1000,
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          <CopyrightIcon
            sx={{ fontSize: 14, mr: 0.5, verticalAlign: "middle" }}
          />
          {new Date().getFullYear()} MindCare. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
