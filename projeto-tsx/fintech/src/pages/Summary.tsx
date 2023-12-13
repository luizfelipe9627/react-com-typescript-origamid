import "./Summary.css";
import { useData } from "../context/DataContext";
import Loading from "../components/Loading";

const Summary = () => {
  const { data, loading, error } = useData(); // Desestrutura o retorno do hook useData, pegando a propriedade data.

  if (loading) return <Loading />; // Se loading for verdadeiro, então retorna o componente Loading.
  if (error) return <p>{error}</p>; // Se error for verdadeiro, então retorna a mensagem de erro.
  if (!data) return null; // Se data for falso, então retorna null, assim não será renderizado o código abaixo.
  return (
    <section>
      <div className="summary flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {data
              // O método filter está filtrando os itens do array data que tem o valor da propriedade status diferente de "falha" e retornando um novo array com os itens filtrados.
              .filter((item) => item.status !== "falha")
              // O método reduce está passando por todos os itens da array filtrada e retornando a soma de todos os valores da propriedade preco. Tendo o valor inicial 0.
              .reduce((acc, item) => acc + item.preco, 0)
              // O método toLocaleString está convertendo o valor total para o formato de moeda.
              .toLocaleString("pt-BR", {
                style: "currency", // Formata o valor para o formato de moeda.
                currency: "BRL", // Define a moeda como Real Brasileiro.
              })}
          </span>
        </div>

        <div className="box">
          <h2>Recebidos</h2>
          <span>
            {data
              // O método filter está filtrando os itens do array data que tem o valor da propriedade status igual a "pago" e retornando um novo array com os itens filtrados.
              .filter((item) => item.status === "pago")
              // O método reduce está passando por todos os itens da array filtrada e retornando a soma de todos os valores da propriedade preco. Tendo o valor inicial 0.
              .reduce((acc, item) => acc + item.preco, 0)
              // O método toLocaleString está convertendo o valor total para o formato de moeda.
              .toLocaleString("pt-BR", {
                style: "currency", // Formata o valor para o formato de moeda.
                currency: "BRL", // Define a moeda como Real Brasileiro.
              })}
          </span>
        </div>

        <div className="box">
          <h2>Processando</h2>
          <span>
            {data
              // O método filter está filtrando os itens do array data que tem o valor da propriedade status igual a "processando" e retornando um novo array com os itens filtrados.
              .filter((item) => item.status === "processando")
              // O método reduce está passando por todos os itens da array filtrada e retornando a soma de todos os valores da propriedade preco. Tendo o valor inicial 0.
              .reduce((acc, item) => acc + item.preco, 0)
              // O método toLocaleString está convertendo o valor total para o formato de moeda.
              .toLocaleString("pt-BR", {
                style: "currency", // Formata o valor para o formato de moeda.
                currency: "BRL", // Define a moeda como Real Brasileiro.
              })}
          </span>
        </div>
      </div>

      <div className="box mb">Gráficos</div>
    </section>
  );
};

export default Summary;
