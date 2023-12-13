import React from "react";
import { useData } from "../context/DataContext";
import SaleItem from "../components/SaleItem";

const Sales = () => {
  const { data, loading, error } = useData(); // Desestrutura o retorno do hook useData, pegando as propriedades data, loading e error.

  return (
    <>
      {/* Se loading for verdadeiro, então retorna a mensagem "Carregando...". */}
      {loading ? (
        <p>Carregando...</p>
      ) : (
        // Se data for verdadeiro, então faz um map no array data e retorna um li com o valor da propriedade id.
        <ul>
          {data &&
            data.map((sale) => (
              <li>
                <SaleItem sale={sale} />
              </li>
            ))}
        </ul>
      )}
      {/* Se error for verdadeiro, então retorna a mensagem de erro. */}
      {error && <p>{error}</p>}
    </>
  );
};

export default Sales;
