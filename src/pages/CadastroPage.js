import React, { useState } from "react";
import { Container, TextField, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CadastroPage = () => {
  const navigate = useNavigate();
  const [inputNome, setInputNome] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputSenha, setInputSenha] = useState("");
  const [inputConfirmarSenha, setInputConfirmarSenha] = useState("");
  const [perfil, setPerfil] = useState("");
  const [isLoading, setLoading] = useState(false);

  const onChangeNome = (e) => setInputNome(e.target.value);
  const onChangeEmail = (e) => setInputEmail(e.target.value);
  const onChangeSenha = (e) => setInputSenha(e.target.value);
  const onChangeConfirmarSenha = (e) => setInputConfirmarSenha(e.target.value);

  const handleSubmitCadastrar = async (e) => {
    e.preventDefault();

    if (!perfil) {
      alert("Por favor, selecione um perfil: Paciente ou Terapeuta.");
      return;
    }

    if (!inputNome || !inputEmail || !inputSenha || !inputConfirmarSenha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (inputSenha !== inputConfirmarSenha) {
      alert("As senhas não coincidem. Por favor, tente novamente.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `/data/${perfil === "paciente" ? "pacientes" : "terapeutas"}.json`
      );
      const data = await response.json();

      const usuarioExistente = data.find(
        (usuario) =>
          usuario.email.trim().toLowerCase() === inputEmail.trim().toLowerCase()
      );

      if (usuarioExistente) {
        alert(
          "Este e-mail já está cadastrado. Por favor, utilize outro e-mail."
        );
        return;
      }

      const novoUsuario = {
        name: inputNome,
        email: inputEmail,
        password: inputSenha,
      };
      const usuariosLocal = JSON.parse(localStorage.getItem("usuarios")) || [];
      usuariosLocal.push(novoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(usuariosLocal));
      alert(`Cadastro realizado com sucesso! Bem vindo(a), ${inputNome}!`);

      setInputNome("");
      setInputEmail("");
      setInputSenha("");
      setInputConfirmarSenha("");
      setPerfil("");
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
        mx: "auto",
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
          mb: 3,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
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
          margin="normal"
          fullWidth
          label="Nome Completo"
          variant="filled"
          onChange={onChangeNome}
        />
        <TextField
          margin="normal"
          fullWidth
          label="E-mail"
          variant="filled"
          onChange={onChangeEmail}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Senha"
          type="password"
          variant="filled"
          onChange={onChangeSenha}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Confirmar Senha"
          type="password"
          variant="filled"
          onChange={onChangeConfirmarSenha}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "left",
          gap: 1,
          maxWidth: 500,
        }}
      >
        <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
          Já possui uma conta?
        </Typography>
        <Typography
          variant="body2"
          onClick={() => navigate("/login")}
          sx={{
            mt: 2,
            textAlign: "center",
            cursor: "pointer",
            fontWeight: "bold",
            fontStyle: "italic",
            color: "gray",
          }}
        >
          Faça login!
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmitCadastrar}
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
        Cadastrar
      </Button>
    </Container>
  );
};

export default CadastroPage;
