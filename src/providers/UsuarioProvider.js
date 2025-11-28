import { createContext, useState, useContext } from "react";

const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [perfil, setPerfil] = useState(null);

  const login = (dadosUsuario, tipoPerfil) => {
    setUsuario(dadosUsuario);
    setPerfil(tipoPerfil);
  };

  const logout = () => {
    setUsuario(null);
    setPerfil(null);
  };

  return (
    <UsuarioContext.Provider value={{ usuario, perfil, login, logout }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = () => useContext(UsuarioContext);
