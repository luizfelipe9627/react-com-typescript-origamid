import React from "react";

// Criado um hook personalizado chamado useLocalStorage que recebe como parâmetro uma chave e um valor inicial, sendo ambos do tipo string(pois o localStorage só aceita string) e retornando um array sendo o primeiro elemento uma string e o segundo elemento uma função atualizadora.
const useLocalStorage = (
  key: string,
  inicial: string,
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  // Criado um estado chamado state e uma função atualizadora chamada setState. O estado inicial é uma função que retorna a chave passada como parâmetro ou o valor inicial caso a chave não exista.
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key); // Está pegando o item do localStorage com a chave passada como parâmetro.
    return local ? local : inicial; // Se o local existir, retorna o local, se não retorna o valor inicial.
  });

  // Criado um efeito colateral que é executado toda vez que o estado ou a chave mudar.
  React.useEffect(() => {
    window.localStorage.setItem(key, state); // Está setando um item no localStorage com a chave passada como parâmetro e o valor do estado.
  }, [state, key]);

  return [state, setState]; // Retorna uma array com o estado e a função atualizadora.
};

export default useLocalStorage;
