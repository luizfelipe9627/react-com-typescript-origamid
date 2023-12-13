import { useData } from "../context/DataContext";
import SaleItem from "../components/SaleItem";
import Loading from "../components/Loading";

const Sales = () => {
  const { data, loading, error } = useData(); // Desestrutura o retorno do hook useData, pegando as propriedades data, loading e error.

  if (loading) return <Loading />; // Se loading for verdadeiro, então retorna o componente Loading.
  if (error) return <p>{error}</p>; // Se error for verdadeiro, então retorna a mensagem de erro.
  if (!data) return null; // Se data for falso, então retorna null, assim não será renderizado o código abaixo.
  return (
    <ul>
      {data.map((sale, index) => (
        <li key={index}>
          <SaleItem sale={sale} />
        </li>
      ))}
    </ul>
  );
};

export default Sales;
