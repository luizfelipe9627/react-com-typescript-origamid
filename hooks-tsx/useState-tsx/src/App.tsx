import React from "react";
import Button from "./Button";

function user() {
  return {
    nome: "Luiz",
    profissao: "Desenvolvedor",
  };
}

interface User {
  nome: string;
  profissao: string;
}

function App() {
  const [data, setData] = React.useState<null | User>(null); // Criado um estado chamado data e uma função para alterar o estado chamado setData, o estado inicial é null e pode ser do tipo User(objeto) ou null.
  const [total, setTotal] = React.useState(0); // Criado um estado chamado total e uma função para alterar o estado chamado setTotal, o estado inicial é 0(tipos primitivos não precisam de tipagem).

  // O useEffect vai executar a função após a renderização do componente, nesse caso só será executado uma vez pois o array de dependências está vazio.
  React.useEffect(() => {
    // O setTimeout vai executar a função após 1 segundo.
    setTimeout(() => {
      setData(user()); // Altera o estado data para o retorno da função user, no caso um objeto.
    }, 1000);
  }, []);

  return (
    <div>
      <div>
        <p>Total: {total}</p>
        {/* Passa a função atualizar como parâmetro para o componente Button. */}
        <Button incrementar={setTotal} />
      </div>
      {/* Se data existir(ou seja, não for null) então exibe o nome do usuário. */}
      {data && <p>{data.nome}</p>}
    </div>
  );
}

export default App;
