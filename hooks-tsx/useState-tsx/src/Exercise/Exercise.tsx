import React from "react";
import Input from "./Input";

/*
  Interface da API: https://data.origamid.dev/vendas/
  Essa API possui dados de hoje até 90 dias atrás.
    
  1 - Utilize a API: `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`.
  2 - Inicio/Final é uma string do tipo data YYYY-MM-DD (padrão de saída do input tipo date).
  3 - Crie ou reutilize o componente Input.tsx (Label com Input) das aulas anteriores.
  4 - Crie 3 estados reativos em App.tsx: data, inicio, final.
  5 - Utilize o componente Input.tsx para modificar o estado de inicio/final.
  6 - Crie um efeito que ocorrerá toda vez que inicio/final mudar. Se existir inicio/final, faça o fetch da API e popule o estado de data com o resultado.
  7 - Caso data seja diferente de null, mostre na tela o nome e o status de cada venda do período selecionado.
*/

// Criado uma interface chamada Venda que recebe os tipos de cada propriedade do objeto retornado pela API.
interface Venda {
  id: string;
  nome: string;
  preco: number;
  status: string;
}

const Exercise = () => {
  const [inicio, setInicio] = React.useState(""); // Criado um estado chamado inicio e uma função chamada setInicio para alterar o estado. O estado inicial é uma string vazia.
  const [final, setFinal] = React.useState(""); // Criado um estado chamado final e uma função chamada setFinal para alterar o estado. O estado inicial é uma string vazia.
  const [data, setData] = React.useState<null | Venda[]>(null); // Criado um estado chamado data e uma função chamada setData para alterar o estado. O estado inicial é null e o tipo é um array de objetos do tipo Venda ou null.

  // O useEffect executa toda vez que o estado inicio ou final mudar.
  React.useEffect(() => {
    // Se inicio e final existirem, executa o if.
    if (inicio && final) {
      // Faz o fetch da API e retorna uma promise.
      fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`)
        // Pega a promise e transforma em json.
        .then((response) => response.json())
        // Pega o json e atualiza o estado data com o valor do json.
        .then((json) => setData(json as Venda[]))
        // Caso ocorra algum erro, executa o catch.
        .catch((error) => {
          console.log(error); // Mostra o erro no console.
          setData(null); // Atualiza o estado data com null.
        });
    }
  }, [inicio, final]);

  return (
    <div>
      <div>
        <Input
          type="date"
          label="Início"
          id="inicio"
          // Coloca como valor do input o estado inicio.
          value={inicio}
          // Passa a função setInicio como propriedade para o componente Input.
          setState={setInicio}
        />
        <Input
          type="date"
          label="Final"
          id="final"
          // Coloca como valor do input o estado final.
          value={final}
          // Passa a função setFinal como propriedade para o componente Input.
          setState={setFinal}
        />
      </div>

      <ul>
        {/* Se data existir, faz o map e retorna um li para cada item do array. */}
        {data &&
          data.map((item) => (
            <li key={item.id}>
              {item.nome} : {item.status}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Exercise;
