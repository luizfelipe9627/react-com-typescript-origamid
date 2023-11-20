import React from "react";

interface ButtonProps {
  // React.Dispatch<React.SetStateAction<tipo>> é o tipo da função que modifica o estado do hook useState.
  incrementar: React.Dispatch<React.SetStateAction<number>>; // Define o estado como um número.
}

const Button = ({ incrementar }: ButtonProps) => {
  return (
    <button
      // Quando o botão for clicado, executa a função incrementar pegando o valor atual do estado(como parâmetro) e retorna o estado atual + 1.
      onClick={() => incrementar((n) => n + 1)}
    >
      Incrementar
    </button>
  );
};

export default Button;
