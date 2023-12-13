import DateInput from "./DateInput";
import { useData } from "../context/DataContext";

// Criado um componente chamado DateRange, responsável por renderizar dois inputs do tipo date.
const DateRange = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useData(); // Desestrutura o retorno do hook useData, pegando as propriedades startDate, setStartDate, endDate e setEndDate.

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Inicio"
        value={startDate}
        onChange={({ target }) => setStartDate(target.value)}
      />
      <DateInput
        label="Final"
        value={endDate}
        onChange={({ target }) => setEndDate(target.value)}
      />
    </form>
  );
};

export default DateRange;
