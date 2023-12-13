import "./MonthBtn.css";
import { useData } from "../context/DataContext";

// Criado uma função chamada nameMonth que recebe o parâmetro n do tipo number, sendo uma função responsável por retornar o nome do mês atual mais o valor do parâmetro n.
function nameMonth(n: number) {
  const date = new Date(); // Criado uma variável chamada date que recebe o valor da data atual.

  date.setMonth(date.getMonth() + n); // Seta o valor do mês atual mais o valor do parâmetro n.

  // Converte o mês do date para pt-BR, e retorna o nome do mês.
  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
}

// Criado uma função chamada formatDate que recebe o parâmetro chamado date do tipo Date, sendo uma função responsável por retornar a data fornecida formatada.
function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, "0"); // Criado uma variável chamada day que recebe o valor do dia atual convertido para string e adicionado 0 a esquerda caso o valor seja menor que 2.
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Criado uma variável chamada month que recebe o valor do mês atual convertido para string e adicionado 0 a esquerda caso o valor seja menor que 2.
  const year = date.getFullYear(); // Criado uma variável chamada year que recebe o valor do ano atual.

  return `${year}-${month}-${day}`; // Retorna uma string com o valor do ano, mês e dia atual.
}

// Criado um componente chamado MonthBtn que recebe o parâmetro n do tipo number.
const MonthBtn = ({ n }: { n: number }) => {
  const { setStartDate, setEndDate } = useData(); // Desestrutura o retorno do hook useData, pegando as propriedades startDate, setStartDate, endDate e setEndDate.

  // Criado uma função chamada setMonth que recebe o parâmetro n do tipo number, sendo uma função responsável por setar o valor do mês atual mais o valor do parâmetro n.
  function setMonth({ n }: { n: number }) {
    const date = new Date(); // Criado uma variável chamada date que recebe o valor da data atual.

    date.setMonth(date.getMonth() + n); // Seta o valor do mês atual mais o valor do parâmetro n.

    // O Date pode receber 3 parâmetros, sendo eles: ano, mês e dia, nessse caso foi passado o ano e o mês, e o dia foi passado como 1.
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1); // Criado uma variável chamada firstDay que recebe o valor do primeiro dia do mês.
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0); // Criado uma variável chamada lastDay que recebe o valor do último dia do mês.

    setStartDate(formatDate(firstDay)); // Chama a função setStartDate e executa a função formatDate passando o parâmetro firstDay, assim formatando a data e setando o valor do startDate.
    setEndDate(formatDate(lastDay)); // Chama a função atualizadora setEndDate e executa a função formatDate passando o parâmetro lastDay, assim formatando a data e setando o valor do endDate.
  }

  return (
    <button
      // Quando o usuário clicar no botão, então executa a função setMonth passando o parâmetro n.
      onClick={() => setMonth({ n })}
    >
      {/* Chama a função nameMonth passando o parâmetro n, assim retornando o nome do mês atual mais o valor do parâmetro n. */}
      {nameMonth(n)}
    </button>
  );
};

export default MonthBtn;
