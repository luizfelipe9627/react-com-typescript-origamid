import React from "react";
import useFetch from "../hooks/useFetch";

// Criado uma interface chamada IVenda que recebe o tipo de dado que será retornado da API.
interface IVenda {
  id: number;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  parcelas: number | null;
  data: string;
}

// Criado uma interface chamada IDataContext que recebe os tipos de dados que serão compartilhados com os componentes filhos que estiverem dentro do componente DataContext.Provider.
interface IDataContext {
  data: IVenda[] | null; // data recebe o tipo array(pois a API está dentro de uma array) IVenda ou null.
  loading: boolean;
  error: string | null;
  startDate: string;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  endDate: string;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
}

// Criado um contexto do React chamado DataContext que recebe o tipo IDataContext ou null, começando com o valor null.
const DataContext = React.createContext<IDataContext | null>(null);

// Criado um hook chamado useData que retorna o valor do contexto DataContext.
export const useData = () => {
  const context = React.useContext(DataContext); // Está chamando o contexto DataContext e armazenando na variável context, recebendo o valor que foi passado para o DataContext.Provider.

  // Se o valor do context for null, então executa o if.
  if (!context) {
    throw new Error("useData precisa estar dentro do DataContextProvider"); // Se o valor for null, então é retornado um erro.
  }

  return context; // Se o valor não for null, então é retornado o valor.
};

// Criado um componente chamado DataContextProvider que recebe children do tipo ReactNode como parâmetro.
export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [startDate, setStartDate] = React.useState(""); // Criado um estado chamado startDate que recebe o tipo string e a função atualizadora chamada setStartDate. O estado começa com o valor de string vazia.
  const [endDate, setEndDate] = React.useState(""); // Criado um estado chamado endDate que recebe o tipo string e a função atualizadora chamada setEndDate. O estado começa com o valor de string vazia.

  // Desestrutura o retorno do hook useFetch, que retorna um objeto com as propriedades data, loading e error, sendo que data recebe o tipo array(pois a API está dentro de uma array) IVenda ou null, loading recebe o tipo booleano e error recebe o tipo string ou null.
  const { data, loading, error } = useFetch<IVenda[]>(
    "https://data.origamid.dev/vendas",
  );

  // Retorna o componente DataContext.Provider que recebe a propriedade value que vai receber o dado que será compartilhada com os componentes filhos que estiverem dentro do componente UiContext.Provide
  return (
    <DataContext.Provider value={{ data, loading, error, startDate, setStartDate, endDate, setEndDate }}>
      {children}
    </DataContext.Provider>
  );
};
