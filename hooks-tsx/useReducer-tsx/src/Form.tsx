import React from "react";
import Input from "./Input";

const Form = () => {
  // Criado uma função chamada reducer que recebe dois parâmetros, o primeiro armaena o estado atual e o segundo é a ação que é disparada pelo dispatch.
  const reducer = (state, action) => {
    console.log(state); // Exibe no console o estado atual.
    console.log(action); // Exibe no console a ação que é disparada pelo dispatch.

    // Se o tipo da ação for igual a setName, então executa o if.
    if ((action.type = "setName")) {
      console.log("Sim é igual"); // Exibe no console a mensagem "Sim é igual".
    }
    return { nome: "Luiz", email: "luiz@email.com" }; // O reducer sempre tem que retornar a mesma estrutura de dados.
  };

  // O useEffect executa apenas uma vez quando o componente é renderizado, pois o array de dependências está vazio.
  React.useEffect(() => {
    dispatch({ type: "setName" }); // Executa a função dispatch que é responsável por disparar as ações para o reducer e passa como parâmetro um objeto que contém o tipo da ação que é disparada.
  }, []);

  // Criado um estado inicial chamado state e uma função chamada dispatch que é responsável por disparar as ações para o reducer.
  const [state, dispatch] = React.useReducer(reducer, { nome: "", email: "" }); // Dentro do useReducer é passado dois parâmetros, o primeiro é uma função chamada reducer que é responsável por definir o estado inicial e o segundo é o estado inicial que é um objeto vazio que contém os campos nome e email.
  return (
    <div>
      <Input label="Nome" id="nome" />
      <Input label="Email" id="email" />
    </div>
  );
};

export default Form;
