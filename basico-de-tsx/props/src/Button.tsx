import React from "react";

//* > Props.
/*
  - É preciso anotar as props que um componente recebe.
*/

// Criado um tipo chamada ButtonProps que recebe as propriedades do componente Button.
type ButtonProps = {
  // Usamos o operador "?" para definir que a propriedade é opcional.
  tamanho?: string; // Define que a propriedade tamanho é do tipo string.
  children: React.ReactNode; // O tipo React.ReactNode é usado para definir que o componente pode receber qualquer elemento como filho.
  onClick?: () => void; // Define que a propriedade onClick é do tipo função que não recebe parâmetros e não retorna nada.
};

//* > Props com React.PropsWithChildren.
/*
  - Tipo nativo do React que já anota a children das props. Recebe uma interface genérica em <>.
*/

// Criado um tipo chamado ButtonProps2 que recebe o tipo utilitário React.PropsWithChildren que contém uma propriedade children do tipo React.ReactNode, dentro da função genérica é definido as propriedades do componente Button.
type ButtonProps2 = React.PropsWithChildren<{
  // Usamos o operador "?" para definir que a propriedade é opcional.
  tamanho?: string; // Define que a propriedade tamanho é do tipo string.
  onClick?: () => void; // Define que a propriedade onClick é do tipo função que não recebe parâmetros e não retorna nada.
}>;

//* > Props com React.ComponentProps.
/*
  - Ao criarmos um componente, podemos perder as funcionalidades de auto-completar do TypeScript. O TypeScript não é capaz de prever quais elementos ou propriedades estão sendo utilizados dentro do nosso componente.
  - Com o React.ComponentProps<"tag">, podemos informar que tipo de propriedades aquele componente deve ter.
*/

// Criado um tipo chamado ButtonProps3 que recebe o tipo utilitário React.ComponentProps que é usado para disponibilizar as propriedades de um elemento HTML, dentro da função genérica é definido o elemento HTML e as propriedades do componente Button.
type ButtonProps3 = React.ComponentProps<"button"> & {
  tamanho?: string; // Define que a propriedade tamanho é do tipo string.
};

// Criado um componente chamado Button que recebe como parâmetro as propriedades desestruturadas e o restante das propriedades utilizando o operador rest(...), sendo do tipo ButtonProps3.
const Button = ({ tamanho, children, ...props }: ButtonProps3) => {
  // O componente Button retorna um elemento button que recebe como propriedade o tamanho da fonte.
  return (
    <button style={{ fontSize: tamanho }} {...props}>
      {children}
    </button>
  );
};

export default Button; // Exporta o componente Button para ser utilizado em outros arquivos.
