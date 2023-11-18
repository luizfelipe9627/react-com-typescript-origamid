import React from "react";

//* > Inferência.
/*
  - Inferência de tipos é quando o TypeScript infere(assume) o tipo de dado de uma variável.
*/

function App() {
  // O TypeScript infere que o tipo de dado é number(pois o valor passado no estado é um number), sendo o estado um number e o setTotal uma função que recebe um number.
  const [total, setTotal] = React.useState(0); // Criado um estado chamado total e uma função para alterar o estado chamada setTotal. O estado inicia com o valor 0.

  // Os eventos não são inferidos pelo TypeScript, sendo necessário informar o tipo de dado do evento, que nesse caso é um evento de clique do mouse do React.
  function incrementar(event: React.MouseEvent) {
    setTotal((total) => total + 1); // Chama a função setTotal e passa como parâmetro uma função que recebe o estado atual e retorna o estado atual + 1.
  }

  return (
    <div>
      <p>Total: {total} </p>
      {/* Criado um botão que ao ser clicado chama a função incrementar. */}
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default App;