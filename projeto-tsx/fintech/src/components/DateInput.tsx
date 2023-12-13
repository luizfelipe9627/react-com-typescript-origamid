import "./DateInput.css";
import React from "react";

// Criado um type chamado IDateInput que é um objeto que tem as mesmas propriedades de um input do HTML, sendo assim ele vai herdar todas as propriedades de um input do HTML.
type IDateInput = React.ComponentProps<"input"> & {
  // E também tem as propriedade label que é do tipo string.
  label: string;
};

// Criado um componente chamado DateInput que recebe o parâmetro label do tipo string e todas as propriedades passadas para o componente.
const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    <div>
      <label
        // O htmlFor é responsável por fazer a ligação entre o label e o input.
        htmlFor={label}
      >
        {label}
      </label>
      <input
        type="date"
        // O id é responsável por fazer a ligação entre o label e o input.
        id={label}
        // O name é responsável por enviar o nome do input para o servidor.
        name={label}
        // O operador spreed passa todas as propriedades que não foram decladaras no parâmetro do componente para o input.
        {...props}
      />
    </div>
  );
};

export default DateInput;
