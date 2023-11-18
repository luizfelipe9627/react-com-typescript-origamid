import React from "react";
import Button from "./Button";

function App() {
  const [total, setTotal] = React.useState(0); // Criado um estado chamado total e uma função para alterar o estado chamada setTotal. O estado inicia com o valor 0.

  // Criado uma função chamada incrementar que recebe como parâmetro um evento do tipo React.MouseEvent(que é um evento de clique do mouse).
  function incrementar() {
    setTotal((total) => total + 1); // Chama a função setTotal e passa como parâmetro uma função que recebe o estado atual e retorna o estado atual + 1.
  }

  return (
    <div>
      <p>Total : {total}</p>
      {/* O componente Button recebe como propriedade uma classe, um evento de clique, o tamanho da fonte e o texto que será exibido no botão. */}
      <Button className="btn" onClick={incrementar} tamanho="1.25rem">
        Incrementar
      </Button>
    </div>
  );
}

export default App;
