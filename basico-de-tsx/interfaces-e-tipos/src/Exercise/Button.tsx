import React from "react";

// Criado uma interface chamada ButtonIncrementProps.
interface ButtonIncrementProps {
  total: number; // Defini a propriedade total como number.
  setTotal: React.Dispatch<React.SetStateAction<number>>; // Defini a propriedade setTotal como React.Dispatch<React.SetStateAction<number>> que é a função que altera o estado.
}

// Criado uma função chamada ButtonIncrement que recebe como parâmetro o total e o setTotal desestruturado, sendo do tipo ButtonIncrementProps.
const ButtonIncrementa = ({ total, setTotal }: ButtonIncrementProps) => {
  return (
    // Quando o botão for clicado, a função setTotal é chamada e o valor do estado é alterado para o valor anterior + 1.
    <button onClick={() => setTotal((anterior) => anterior + 1)}>
      Incrementar {total}
    </button>
  );
};

export default ButtonIncrementa;
