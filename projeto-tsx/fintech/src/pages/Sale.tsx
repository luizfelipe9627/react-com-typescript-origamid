import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";

const Sale = () => {
  const { id } = useParams(); // Desestrutura o retorno do hook useParams, que retorna um objeto com a propriedade id.

  // Desestrutura o retorno do hook useFetch(responsável por fazer o fetch), pegando as propriedades data, loading e error. Foi definido que a API é do tipo ISaleWithoutDate, sendo apenas um objeto, não sendo necessário passar como array.
  const { data, loading, error } = useFetch<ISaleWithoutDate>(
    `https://data.origamid.dev/vendas/${id}`,
  );

  if (loading) return <Loading />; // Se loading for verdadeiro, então retorna o componente Loading.
  if (error) return <p>{error}</p>; // Se error for verdadeiro, então retorna a mensagem de erro.
  if (!data) return null; // Se data for falso, então retorna null, assim não será renderizado o código abaixo.
  return (
    <div>
      <div>
        <div className="box mb">ID: {data.id}L</div>
        <div className="box mb">Nome: {data.nome}</div>
        <div className="box mb">
          Preço:{" "}
          {/* O método toLocaleString está convertendo o valor total para o formato de moeda. */}
          {data.preco.toLocaleString("pt-br", {
            style: "currency", // Formata o valor para o formato de moeda.
            currency: "BRL", // Define a moeda como Real Brasileiro.
          })}
        </div>
        <div className="box mb">Status: {data.status}</div>
        <div className="box mb">Pagamento: {data.pagamento}</div>
      </div>
    </div>
  );
};

export default Sale;
