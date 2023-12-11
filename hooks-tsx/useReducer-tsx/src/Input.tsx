import React from "react";

// Criado um tipo chamado InputProps que recebe o tipo utilitário React.ComponentProps que é usado para disponibilizar as propriedades de um elemento HTML, dentro da função genérica é definido o elemento HTML e as propriedades do componente Input.
type InputProps = React.ComponentProps<"input"> & {
  label: string; // Define que a propriedade label é do tipo string.
};

// Criado um componente chamado Input que recebe as propriedades desestruturadas passadas como parâmetro que são do tipo InputProps. O rest operator(...props) é usado para passar todas as propriedades que não foram desestruturadas para o elemento HTML.
const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        // O name é responsável por definir o nome do input, para que o input seja associado ao label.
        name={id}
        // O id é responsável por definir o id do input, para que o input seja associado ao label.
        id={id}
        // O type é responsável por definir o tipo do input, no caso é text.
        type="text"
        // O ...props é responsável por passar todas as propriedades que não foram desestruturadas para o elemento HTML.
        {...props}
      />
    </div>
  );
};

export default Input;
