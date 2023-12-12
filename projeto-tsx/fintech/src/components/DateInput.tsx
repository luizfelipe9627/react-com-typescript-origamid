import React from "react";

// Criado um objeto chamado generalStyle que é do tipo React.CSSProperties que é um objeto que contém as propriedades de um CSS.
const generalStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-sm) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)",
};

// Criado um objeto chamado labelStyles que é do tipo React.CSSProperties que é um objeto que contém as propriedades de um CSS.
const labelStyle: React.CSSProperties = {
  display: "flex",
  marginBottom: "var(--gap-sm)",
  fontWeight: "600",
  // O operador spreed passa todas as propriedades do objeto generalStyle para o objeto labelStyle.
  ...generalStyle,
};

// Criado um objeto chamado inputStyles que é do tipo React.CSSProperties que é um objeto que contém as propriedades de um CSS.
const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  // O operador spreed passa todas as propriedades do objeto generalStyle para o objeto inputStyle.
  ...generalStyle,
};

// Criado um type chamado IDateInput que é um objeto que tem as mesmas propriedades de um input do HTML, sendo assim ele vai herdar todas as propriedades de um input do HTML.
type IDateInput = React.ComponentProps<"input"> & {
  // E também tem as propriedade label que é do tipo string.
  label: string;
};

const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    <div>
      <label
        // O style é responsável por estilizar o label.
        style={labelStyle}
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
        // O style é responsável por estilizar o input.
        style={inputStyle}
        // O operador spreed passa todas as propriedades que não foram decladaras no parâmetro do componente para o input.
        {...props}
      />
    </div>
  );
};

export default DateInput;
