// Criado um objeto chamado buttonStyle que é do tipo React.CSSProperties, responsável por estilizar o button.
const buttonStyle: React.CSSProperties = {
  padding: "var(--gap) var(--gap-sm)",
  backgroundColor: "var(--color-3)",
  borderRadius: "var(--gap)",
  border: "none",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};

// Criado uma função chamada nameMonth que recebe o parâmetro n do tipo number, sendo uma função responsável por retornar o nome do mês atual mais o valor do parâmetro n.
function nameMonth(n: number) {
  const date = new Date(); // Criado uma variável chamada date que recebe o valor da data atual.

  date.setMonth(date.getMonth() + n); // Seta o valor do mês atual mais o valor do parâmetro n.

  // Converte o mês do date para pt-BR, e armazena o nome do mês na variável monthName.
  const monthName = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(
    date,
  );

  // Converte o mês do date para pt-BR, e retorna o nome do mês.
  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
}

// Criado um componente chamado MonthBtn que recebe o parâmetro n do tipo number.
const MonthBtn = ({ n }: { n: number }) => {
  // Criado uma função chamada setMonth que recebe o parâmetro n do tipo number, sendo uma função responsável por setar o valor do mês atual mais o valor do parâmetro n.
  function setMonth({ n }: { n: number }) {
    const date = new Date(); // Criado uma variável chamada date que recebe o valor da data atual.

    date.setMonth(date.getMonth() + n); // Seta o valor do mês atual mais o valor do parâmetro n.

    // O Date pode receber 3 parâmetros, sendo eles: ano, mês e dia, nessse caso foi passado o ano e o mês, e o dia foi passado como 1.
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1); // Criado uma variável chamada firstDay que recebe o valor do primeiro dia do mês.
  }

  return (
    <button style={buttonStyle} onClick={() => setMonth}>
      {nameMonth(n)}
    </button>
  );
};

export default MonthBtn;
