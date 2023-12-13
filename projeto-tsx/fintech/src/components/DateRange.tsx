import DateInput from "./DateInput";
import { useData } from "../context/DataContext";

// Criado um componente chamado DateRange, responsável por renderizar dois inputs do tipo date.
const DateRange = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useData(); // Desestrutura o retorno do hook useData, pegando as propriedades startDate, setStartDate, endDate e setEndDate.

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Inicio"
        // O value é o valor do input, nesse caso, o valor do input é o valor do estado startDate.
        value={startDate}
        // O onChange é uma função que é executada toda vez que o valor do input é alterado, nesse caso, toda vez que o input é alterado, alteramos o valor do estado startDate.
        onChange={({ target }) => setStartDate(target.value)}
      />
      <DateInput
        label="Final"
        // O value é o valor do input, nesse caso, o valor do input é o valor do estado endDate.
        value={endDate}
        // O onChange é uma função que é executada toda vez que o valor do input é alterado, nesse caso, toda vez que o input é alterado, alteramos o valor do estado endDate.
        onChange={({ target }) => setEndDate(target.value)}
      />
    </form>
  );
};

export default DateRange;
