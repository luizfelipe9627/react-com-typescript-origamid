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

// Criado uma função chamada getData que recebe o parâmetro daysAgo do tipo number, sendo uma função responsável por retornar a data atual menos o valor do parâmetro daysAgo.
function getData(daysAgo: number) {
  const date = new Date(); // Criado uma variável chamada date que recebe o valor da data atual.

  date.setDate(date.getDate() - daysAgo); // A variável date recebe o valor da data atual menos o valor do parâmetro daysAgo.

  const day = String(date.getDate()).padStart(2, "0"); // Criado uma variável chamada day que recebe o valor do dia atual convertido para string e adicionado 0 a esquerda caso o valor seja menor que 2.
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Criado uma variável chamada month que recebe o valor do mês atual convertido para string e adicionado 0 a esquerda caso o valor seja menor que 2.
  const year = date.getFullYear(); // Criado uma variável chamada year que recebe o valor do ano atual.

  return `${year}-${month}-${day}`; // Retorna uma string com o valor do ano, mês e dia atual.
}

// Criado um componente chamado DataContextProvider que recebe children do tipo ReactNode como parâmetro.
export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [startDate, setStartDate] = React.useState(getData(30)); // Criado um estado chamado startDate que recebe o tipo string e a função atualizadora chamada setStartDate. O estado começa com o retorno da função getData(a data atual) com o valor 30(menos 30 dias).
  const [endDate, setEndDate] = React.useState(getData(0)); // Criado um estado chamado endDate que recebe o tipo string e a função atualizadora chamada setEndDate. O estado começa com o retorno da função getData(a data atual) com o valor 0(dia atual).

  // Desestrutura o retorno do hook useFetch, que retorna um objeto com as propriedades data, loading e error, sendo que data recebe o tipo array(pois a API está dentro de uma array) IVenda ou null, loading recebe o tipo booleano e error recebe o tipo string ou null.
  const { data, loading, error } = useFetch<IVenda[]>(
    // A API recebe dois parâmetros, o primeiro é a data de início e o segundo é a data final, assim a API retorna os dados que estão entre essas duas datas.
    `https://data.origamid.dev/vendas/?inicio=${startDate}&final=${endDate}`,
  );

  // Retorna o componente DataContext.Provider que recebe a propriedade value que vai receber os dados que serão compartilhados com os componentes filhos que estiverem dentro do componente UiContext.Provide
  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
