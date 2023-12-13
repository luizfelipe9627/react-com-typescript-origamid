import MonthBtn from "./MonthBtn";

// Criado um componente chamado Months, responsável por renderizar três botões com os nomes dos meses anteriores, atual e posterior.
const Months = () => {
  return (
    <div className="flex">
      {/* O mês anterior do anterior é o mês -2, por isso o valor do parâmetro n é -2. */}
      <MonthBtn n={-2} />
      {/* O mês anterior é o mês -1, por isso o valor do parâmetro n é -1. */}
      <MonthBtn n={-1} />
      {/* O mês atual é o mês 0, por isso o valor do parâmetro n é 0. */}
      <MonthBtn n={0} />
    </div>
  );
};

export default Months;
