import React from "react";
import useFetch from "./useFetch";

// Criado uma interface chamada ProdutoProps para tipar os dados que serão retornados da api.
interface ProdutoProps {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean;
}

const Exercise = () => {
  const [id, setId] = React.useState(""); // Criado um estado chamado id e uma função setId para alterar o estado. O estado inicial é uma string vazia.

  // Chama o hook useFetch passando como valor da função genérica do tipo ProdutoProps da array e como parâmetro a url da api, armazenando o retorno na constante produtos.
  const produtos = useFetch<ProdutoProps[]>(
    "https://data.origamid.dev/produtos",
  );

  // Chama o hook useFetch passando como valor da função genérica do tipo ProdutoProps(único produto) e como parâmetro a url da api, e no segundo parâmetro passa um objeto(options) com a propriedade cache com o valor force-cache, armazenando o retorno na constante produto.
  const produto = useFetch<ProdutoProps>(
    `https://data.origamid.dev/produtos/${id}`,
    {
      cache: "force-cache", // Força o cache, ou seja, ele armazena o resultado da requisição na memória cache do navegador para que não seja necessário fazer uma nova requisição.
    },
  );

  return (
    <section className="flex">
      <div>
        {/* Se produtos.data for true, ou seja, se existir algum dado na array, então ele vai mapear a array e retornar um botão para cada produto. */}
        {produtos.data &&
          produtos.data.map((produto) => (
            <button
              style={{ fontSize: "1rem" }}
              key={produto.id}
              // Ao clicar no botão, ele vai chamar a função setId passando como parâmetro o id do produto que foi clicado.
              onClick={() => setId(produto.id)}
            >
              {produto.id}: {produto.nome}
            </button>
          ))}
      </div>

      <div>
        {/* Se produto.loading for true, ou seja, se estiver carregando, então ele vai retornar um parágrafo com a mensagem Carregando... */}
        {produto.loading && <p>Carregando...</p>}

        {/* Se o produto.data existir e o estado id estiver preenchido, então ele vai retornar os dados do produto. */}
        {produto.data && id && (
          <ul>
            <li>ID: {produto.data.id}</li>
            <li>Nome: {produto.data.nome}</li>
            <li>Preço: {produto.data.preco}</li>
            <li>Quantidade: {produto.data.quantidade}</li>
            <li>Descrição: {produto.data.descricao}</li>
            <li>Internacional: {produto.data.internacional}</li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default Exercise;
