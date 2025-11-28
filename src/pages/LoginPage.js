import React, { useState } from "react";
import { Container, TextField, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUsuario } from "../providers/UsuarioProvider";

const LoginPage = () => {
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState("");
  const [inputSenha, setInputSenha] = useState("");
  const [perfil, setPerfil] = useState("");
  const [isLoading, setLoading] = useState(false);

  const onChangeEmail = (e) => setInputEmail(e.target.value);
  const onChangeSenha = (e) => setInputSenha(e.target.value);

  const { login } = useUsuario();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!perfil) {
      alert("Por favor, selecione um perfil: Paciente ou Terapeuta.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `/data/${perfil === "paciente" ? "pacientes" : "terapeutas"}.json`
      );
      const data = await response.json();
      const usuarioValido = data.find(
        (usuario) =>
          usuario.email.trim().toLowerCase() ===
            inputEmail.trim().toLowerCase() &&
          usuario.password.trim() === inputSenha.trim()
      );
      if (usuarioValido) {
        login(usuarioValido, perfil);
        if (perfil === "paciente") {
          navigate("/dashboard-paciente");
        } else {
          navigate("/dashboard-terapeuta");
        }
      } else {
        alert("Dados inválidos. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
      alert("Erro ao acessar o banco de dados. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
    console.log(
      `Email: ${inputEmail}, Senha: ${inputSenha}, Perfil: ${perfil}`
    );
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
        width: { xs: "100%", sm: "80%", md: "50%" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Box
          component="img"
          src={require("../assets/Logomarca_App_MindCare.png")}
          alt="Logo MindCare"
          sx={{ width: 100, borderRadius: "50%", mb: 1 }}
        />
        <Typography variant="h4" gutterBottom>
          MindCare
        </Typography>
      </Box>
      <Typography variant="subtitle1" sx={{ mb: 3 }}>
        Bem vindo(a) ao seu espaço de cuidado mental.
      </Typography>
      <Box
        sx={{
          width: "100%",
          mb: 3,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: 500,
        }}
      >
        <Button
          id="buttonPaciente"
          variant={perfil === "paciente" ? "outlined" : "contained"}
          onClick={() => setPerfil("paciente")}
          sx={{
            mr: 3,
            borderRadius: "30px",
            fontWeight: "bold",
            color: perfil !== "paciente" ? "white" : "main.primary",
          }}
        >
          Sou Paciente
        </Button>
        <Button
          id="buttonTerapeuta"
          variant={perfil === "terapeuta" ? "outlined" : "contained"}
          color="secondary"
          onClick={() => setPerfil("terapeuta")}
          sx={{
            borderRadius: "30px",
            fontWeight: "bold",
            color: perfil !== "terapeuta" ? "white" : "main.secondary",
          }}
        >
          Sou Terapeuta
        </Button>
      </Box>
      <Box component="form">
        <TextField
          id="inputAuthEmail"
          margin="normal"
          fullWidth
          label="E-mail"
          variant="filled"
          onChange={onChangeEmail}
        />
        <TextField
          id="inputAuthSenha"
          margin="normal"
          fullWidth
          label="Senha"
          type="password"
          variant="filled"
          onChange={onChangeSenha}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 500,
        }}
      >
        <Typography
          variant="body2"
          sx={{ mt: 2, textAlign: "center", cursor: "pointer" }}
        >
          Esqueceu sua senha?
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
            Não tem conta?
          </Typography>
          <Typography
            variant="body2"
            onClick={() => navigate("/cadastro")}
            sx={{
              mt: 2,
              textAlign: "center",
              cursor: "pointer",
              fontWeight: "bold",
              fontStyle: "italic",
              color: "gray",
            }}
          >
            Cadastre-se
          </Typography>
        </Box>
      </Box>
      <Button
        id="buttonSubmit"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={isLoading}
        sx={{
          mt: 3,
          borderRadius: "30px",
          color: "white",
          fontWeight: "bold",
          fontSize: "16px",
          width: "30%",
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default LoginPage;
