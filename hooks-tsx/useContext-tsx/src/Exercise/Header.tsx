import { useUser } from "./UserContext";

const Header = () => {
  const { data, loading } = useUser(); // Está desestruturando o valor que foi passado para o UserContext.Provider no componente UserContextProvider.

  return loading ? <p>Carregando...</p> : <h1>{data?.nome}</h1>;
};

export default Header;
