import "./SaleItem.css";
import { NavLink } from "react-router-dom";

// Criado um componente chamado SaleItem que recebe o parâmetro sale do tipo ISale.
const SaleItem = ({ sale }: { sale: ISale }) => {
  return (
    <div className="saleItem box">
      <NavLink to={`/sales/${sale.id}`}>{sale.id}</NavLink>
      <div>{sale.nome}</div>
      <div>
        {/* Formata o valor da propriedade preco para o formato de moeda brasileira. */}
        {sale.preco.toLocaleString("pt-br", {
          style: "currency", // Formata o valor para o formato de moeda.
          currency: "BRL", // Define a moeda como Real Brasileiro.
        })}
      </div>
    </div>
  );
};

export default SaleItem;
