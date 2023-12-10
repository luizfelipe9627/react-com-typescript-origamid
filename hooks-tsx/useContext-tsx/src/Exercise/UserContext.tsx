import React from "react";
import useFetch from "./useFetch";

// Criado uma interface chamada User que tipa os dados que serão retornados da API.
interface User {
  id: number;
  nome: string;
  idade: number;
  aulas: number;
  cursos: number;
  preferencias: {
    playback: number;
    volume: number;
    qualidade: "baixa" | "media" | "alta";
  };
}

// Criado uma interface chamada UserContextProps que os dados que serão compartilhados com os componentes filhos.
interface UserContextProps {
  data: User | null;
  loading: boolean;
  error: string | null;
}

// Criado um contexto do React chamado UserContext que recebe o tipo UserContextProps ou null, começando com o valor null.
const UserContext = React.createContext<UserContextProps | null>(null);

export const useUser = () => {
  const context = React.useContext(UserContext); // Está chamando o contexto UserContext e armazenando na variável context, recebendo o valor que foi passado para o UserContext.Provider.

  // Se o valor for null, então executa o if.
  if (!context) {
    throw new Error("useUser deve estar dentro do UserContextProvider"); // Se o valor for null, então é retornado um erro.
  }

  return context; // Se o valor não for null, então é retornado o valor.
};

// Criado um componente chamado UserContextProvider que recebe children do tipo ReactNode como parâmetro.
export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<User>(
    "https://data.origamid.dev/usuarios/1",
  );

  // Retorna o componente UserContext.Provider que recebe a propriedade value que vai receber o dado que será compartilhada com os componentes filhos que estiverem dentro do componente UserContext.Provider.
  return (
    <UserContext.Provider value={{ data, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
