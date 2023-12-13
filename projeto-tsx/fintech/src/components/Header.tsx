import "./Header.css";
import React from "react";
import DateRange from "./DateRange";
import Months from "./Months";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = React.useState("Resumo"); // Criado um estado chamado title e uma função atualizadora chamada setTitle. O valor inicial do estado é "Resumo".

  const location = useLocation(); // O useLocation retorna um objeto com informações sobre a URL atual e armazena na variável location.

  // O useEffect executa uma função sempre que o componente é renderizado. Sua array de dependências contém o location, ou seja quando o location mudar, a função será executada.
  React.useEffect(() => {
    // Se o pathname for igual a "/" executa o if, se não executa o else.
    if (location.pathname === "/") {
      setTitle("Resumo"); // Atualiza o estado title para "Resumo".
      document.title = "Fintech | Resumo"; // Atualiza o título da página par "Fintech | Resumo"
    } else {
      setTitle("Vendas"); // Atualiza o estado title para "Vendas".
      document.title = "Fintech | Vendas"; // Atualiza o título da página para "Fintech | Vendas".
    }
  }, [location]);

  return (
    <header className="mb">
      <div className="dateRange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Months />
    </header>
  );
};

export default Header;
