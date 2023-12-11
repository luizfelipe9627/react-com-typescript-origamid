import React from "react";
import Input from "./Input";

//* > useReducer
/*
  - O useReducer é um hook que é usado para gerenciar estados complexos, ele é usado quando o estado depende de outros estados ou quando o estado possui uma lógica complexa.
  - Com o TypeScript podemos definir as possíveis Actions como um tipo, facilitando o uso do Reducer.
*/

// Defini uma interface chamado State para definir o tipo do estado.
interface State {
  name: string;
  email: string;
}

// Defini uma interface chamado Action para definir o tipo da ação.
/*
  interface Action {
    type: "setName" | "setEmail"; // O tipo da ação pode ser setName ou setEmail.
    payload: string;
  }
*/

// Defini um tipo chamado Action para definir o tipo da ação, tendo como opções setName ou setEmail, deixando o código mais livre para adicionar novas ações e seus respectivos tipos.
type Action =
  | { type: "setName"; payload: string }
  | { type: "setEmail"; payload: string };

const Form = () => {
  // Criado uma função chamada reducer que recebe dois parâmetros, o primeiro armazena o estado atual, nesse caso o parâmetro state que é do tipo State e o segundo parâmetro armazena a ação disparada pelo dispatch, sendo nesse caso o parâmetro action que é do tipo Action.
  const reducer = (state: State, action: Action) => {
    console.log(state); // Exibe no console o estado atual.
    console.log(action); // Exibe no console a ação disparada pelo dispatch.

    // Criado um switch para verificar qual é o tipo da ação.
    switch (action.type) {
      // Caso o tipo da ação seja setName, então executa o case setName.
      case "setName":
        // Retorna um novo estado com o name atualizado.
        return {
          ...state, // O spread operator é usado para copiar o estado atual e atualizar o campo name com o novo valor.
          name: action.payload, // O payload está recebendo o name que foi passado como parâmetro na função dispatch.
        };
      case "setEmail":
        // Retorna um novo estado com o name atualizado.
        return {
          ...state, // O spread operator é usado para copiar o estado atual e atualizar o campo email com o novo valor.
          email: action.payload, // O payload está recebendo o email que foi passado como parâmetro na função dispatch.
        };
      // Caso não seja nenhuma das condições acima, então executa o default.
      default:
        return state; // Retorna o estado atual.
    }
  };

  // Criado um estado inicial chamado state e uma função chamada dispatch que é responsável por disparar as ações para o reducer.
  const [state, dispatch] = React.useReducer(reducer, { name: "", email: "" }); // Dentro do useReducer é passado dois parâmetros, o primeiro é uma função chamada reducer que é responsável por definir o estado inicial e o segundo é o estado inicial que é um objeto vazio que contém os campos name e email.
  return (
    <div>
      {/* Como valor do atributo value é passado o valor do estado name e email. */}
      <Input
        label="Nome"
        id="nome"
        value={state.name}
        // O onChange é executado toda vez que o valor(value) do input é alterado.
        onChange={({ target }) =>
          // Chama a função dispatch passando como parâmetro um objeto que contém o tipo da ação e o payload, sendo o payload o responsável por receber o valor do input.
          dispatch({ type: "setName", payload: target.value })
        }
      />
      <Input
        label="Email"
        id="email"
        value={state.email} // O onChange é executado toda vez que o valor(value) do input é alterado.
        onChange={({ target }) =>
          // Chama a função dispatch passando como parâmetro um objeto que contém o tipo da ação e o payload, sendo o payload o responsável por receber o valor do input.
          dispatch({ type: "setEmail", payload: target.value })
        }
      />
    </div>
  );
};

export default Form;
