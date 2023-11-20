import React from "react";

function App() {
  // Criado uma função chamada useEffectCallback.
  function useEffectCallback() {
    console.log("Componente montado"); // Executa toda vez que o componente for montado e atualizado.

    // O return é opcional, mas é uma boa prática para limpar o efeito.
    return () => {
      console.log("Componente desmontado"); // Executa toda vez que o componente for desmontado, ou seja, quando o componente for removido da tela.
    };
  }

  // Criado um efeito que será executado toda vez que o componente for montado/rederizado, irá executar a função anônima.
  React.useEffect(() => {
    console.log("Montou o componente"); // Executa toda vez que o componente for montado.

    // O return é opcional, mas é uma boa prática para limpar o efeito.
    return () => {
      console.log("Desmontou o componente"); // Executa toda vez que o componente for desmontado, ou seja, quando o componente for removido da tela.
    };
  }, []);

  // Criado um efeito que será executado toda vez que o componente for montado/rederizado irá executar o useEffectCallback.
  React.useEffect(useEffectCallback, []);

  return <div>React</div>;
}

export default App;
