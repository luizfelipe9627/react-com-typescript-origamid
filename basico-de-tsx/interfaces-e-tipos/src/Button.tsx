import React from "react";

//* > React.
/*
  - As interfaces de React com TypeScript estão disponíveis diretamente no objeto React importado de React.
*/

// Criado um componente Button que recebe um children do tipo PropsWithChildren, ou seja, um componente que recebe um children.
export const Button = ({ children }: React.PropsWithChildren) => {
  return <button>{children}</button>;
};

//* > JSX.Element.
/*
  - Elemento que é retornado pelo componente. Pode ser também: React.ReactElement e React.JSX.Element. Não precisamos anotar, pois o React já infere o mesmo.
*/

// Criado um componente Button2 que recebe um children do tipo PropsWithChildren, ou seja, um componente que recebe um children e retorna um JSX.Element que é o tipo padrão do React, sendo assim, não precisamos anotar o tipo.
export const Button2 = ({
  children,
}: React.PropsWithChildren): React.JSX.Element => {
  return <button>{children}</button>;
};

//* > Eventos.
/*
  - Não confunda, um evento onClick no React é um evento próprio do React e não um evento nativo do JavaScript. O correto é React.MouseEvent e não MouseEvent.
*/

// Criado um componente Button3.
export const Button3 = () => {
  // Criado uma função chamada handleClick que recebe um event do tipo React.MouseEvent, ou seja, um evento de clique do React.
  const handleClick = (event: React.MouseEvent) => {
    console.log(event.target); // Imprime no console o elemento que foi clicado.
  };

  // Retorna um botão que recebe um evento de clique que chama a função handleClick.
  return <button onClick={handleClick}>Mostrar elemento</button>;
};

// Criado um cponente Button4.
export const Button4 = () => {
  // Criado uma função chamada handleClick que recebe o tipo MouseEventHandler do React, ou seja, um evento de clique do React. Assim não precisando anotar o tipo do event.
  const handleClick: React.MouseEventHandler = (event) => {
    console.log(event.pageX); // Imprime no console a posição do mouse no eixo X.
  };

  // Retorna um botão que recebe um evento de clique que chama a função handleClick.
  return <button onClick={handleClick}>Mostrar Posição X</button>;
};
