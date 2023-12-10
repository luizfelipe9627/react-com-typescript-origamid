import { useUser } from "./UserContext";

const Content = () => {
  const { data, loading } = useUser(); // Está desestruturando o valor que foi passado para o UserContext.Provider no componente UserContextProvider.

  return loading ? (
    <p>Carregando...</p>
  ) : (
    <div>
      <p>Idade: {data?.idade}</p>
      <p>Aulas: {data?.aulas}</p>
      <p>Cursos: {data?.cursos}</p>
      <p>Preferências:</p>
      <p>Playback: {data?.preferencias.playback}</p>
      <p>Volume: {data?.preferencias.volume}</p>
      <p>Qualidade: {data?.preferencias.qualidade}</p>
    </div>
  );
};

export default Content;
