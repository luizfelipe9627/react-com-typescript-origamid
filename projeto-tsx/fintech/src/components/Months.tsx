import MonthBtn from "./MonthBtn";

// Criado um componente chamado Months, responsável por renderizar três botões com os nomes dos meses anteriores, atual e posterior.
const Months = () => {
  return (
    <div className="flex">
      {/* Cria 4 botões, sendo o primeiro com o nome do mês atual, o segundo com o nome do mês anterior, o terceiro com o nome do mês anterior ao anterior e o quarto com o nome do mês posterior. Por exemplo: Novembro, Outubro, Setembro e Dezembro. */}
      <MonthBtn n={-3} />
      <MonthBtn n={-2} />
      <MonthBtn n={-1} />
      <MonthBtn n={0} />
    </div>
  );
};

export default Months;
