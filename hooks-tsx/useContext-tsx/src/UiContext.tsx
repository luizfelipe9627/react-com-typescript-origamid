import React from "react";

// Criado uma interface chamada UiContextProps que recebe o tipo booleano para a propriedade dark e uma função atualizadora que recebe o tipo booleano para a propriedade setDark.
interface UiContextProps {
  // Aqui tem que ser o mesmo nome e tipo de dado da propriedade que está sendo passada para o value do UiContext.Provider.
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

// Criado um contexto do React chamado UiContext que recebe o tipo UiContextProps ou null, começando com o valor null.
const UiContext = React.createContext<UiContextProps | null>(null);

// Criado um hook chamado useUi que retorna o valor do contexto UiContext.
export const useUi = () => {
  const context = React.useContext(UiContext); // Está chamando o contexto UiContext e armazenando na variável context, recebendo o valor que foi passado para o UiContext.Provider.

  // Se o valor for null, então executa o if.
  if (!context) {
    throw new Error("useContext deve estar dentro do Provider"); // Se o valor for null, então é retornado um erro.
  }

  return context; // Se o valor não for null, então é retornado o valor.
};

// Criado um componente chamado UiContextProvider que recebe children do tipo ReactNode como parâmetro.
export const UiContextProvider = ({ children }: React.PropsWithChildren) => {
  const [dark, setDark] = React.useState(false); // Criado um estado chamado dark e uma função atualizadora chamada setDark, que recebe o valor inicial de false.

  // Retorna o componente UiContext.Provider que recebe a propriedade value que vai receber o dado que será compartilhada com os componentes filhos que estiverem dentro do componente UiContext.Provider.
  return (
    <UiContext.Provider value={{ dark, setDark }}>
      {children}
    </UiContext.Provider>
  );
};
