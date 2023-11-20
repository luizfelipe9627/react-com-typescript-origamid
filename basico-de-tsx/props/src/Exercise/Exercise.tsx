import React from "react";
import Input from "./Input";

const Exercise = () => {
  const [data, setData] = React.useState(""); // Criado um estado chamado data e uma função para alterar o estado chamada setData. O estado inicia como uma string vazia.

  return (
    <>
      <p>Início da viagem : {data}</p>
      {/* O componente Input recebe propriedades chamadas type, id e label. */}
      <Input type="email" id="email" label="Email" />
      <Input type="text" id="name" label="Nome" />
      <Input
        // O value é responsável por definir o valor do input, nesse caso o valor é o estado data.
        value={data}
        // O onChange executa a cada alteração do input e recebe como parâmetro desestruturado target(que é o elemento que sofreu a alteração) e chama a função setData passando como parâmetro o valor do input.
        onChange={({ target }) => setData(target.value)}
        type="date"
        id="inicio"
        label="Início da Viagem"
      />
      <Input type="time" id="horario" label="Hórario" />
    </>
  );
};

export default Exercise;
