import React from "react";

/*
  1 - Crie um componente Input.
  2 - Ele deve retornar <label> e <input>, dentro de uma <div>.
  3 - Recebe uma propriedade chamada label.
  4 - A propriedade deve ser usada como htmlFor (label), name (input), id (input) e como conteúdo de <label>.
  5 - Permita o uso de qualquer propriedade de input no componente Input.
  6 - Adicione 1rem de marginBottom na <div>.
*/

// Criado um tipo chamado InputProps que recebe o tipo utilitário React.ComponentProps que é usado para disponibilizar as propriedades de um elemento HTML, dentro da função genérica é definido o elemento HTML e as propriedades do componente Input.
type InputProps = React.ComponentProps<"input"> & {
  label: string; // Define que a propriedade label é do tipo string.
};

// Criado um componente chamado Input que recebe como parâmetro as propriedades desestruturadas e o restante das propriedades utilizando o operador rest(...), sendo do tipo InputProps.
const Input = ({ label, id, ...props }: InputProps) => {
  return (
    // O style é responsável por definir o estilo do elemento, nesse caso o marginBottom é de 1rem.
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type="text" {...props} />
    </div>
  );
};

export default Input;
