import "./Sidenav.css";
import summary from "../assets/summary.svg";
import sales from "../assets/sales.svg";
import webhooks from "../assets/webhooks.svg";
import configs from "../assets/configs.svg";
import contact from "../assets/contact.svg";
import logout from "../assets/logout.svg";
import FintechSVG from "../assets/FintechSVG";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech Logo" />

      <ul>
        <li>
          <span>
            {/* Não tem nada no alt pois ele é uma imagem decorativa sem significado. */}
            <img src={summary} alt="" />
          </span>
          {/* O NavLink é o componente que vai definir um link da aplicação, que coloca uma classe chamada "active" no elemento que está ativo. */}
          {/* O elemento to vai levar para a rota definida no atributo. */}
          <NavLink to="/">Resumo</NavLink>
        </li>
        <li>
          <span>
            {/* Não tem nada no alt pois ele é uma imagem decorativa sem significado. */}
            <img src={sales} alt="" />
          </span>
          {/* O NavLink é o componente que vai definir um link da aplicação, que coloca uma classe chamada "active" no elemento que está ativo. */}
          {/* O elemento to vai levar para a rota definida no atributo. */}
          <NavLink to="/sales">Vendas</NavLink>
        </li>
        <li>
          <span>
            {/* Não tem nada no alt pois ele é uma imagem decorativa sem significado. */}
            <img src={webhooks} alt="" />
          </span>
          <a>Webhooks</a>
        </li>
        <li>
          <span>
            {/* Não tem nada no alt pois ele é uma imagem decorativa sem significado. */}
            <img src={configs} alt="" />
          </span>
          <a>Configurações</a>
        </li>
        <li>
          <span>
            {/* Não tem nada no alt pois ele é uma imagem decorativa sem significado. */}
            <img src={contact} alt="" />
          </span>
          <a>Contato</a>
        </li>
        <li>
          <span>
            {/* Não tem nada no alt pois ele é uma imagem decorativa sem significado. */}
            <img src={logout} alt="" />
          </span>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
