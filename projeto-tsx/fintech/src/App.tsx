import "./styles/utils/all.css";
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";
import Summary from "./pages/Summary";
import { DataContextProvider } from "./context/DataContext";
import Sales from "./pages/Sales";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sale from "./pages/Sale";

function App() {
  return (
    // O BrowserRouter é o componente pai que vai prover as funcionalidades de roteamento.
    <BrowserRouter>
      {/* O DataContextProvider é o componente que vai prover os dados para os
      componentes filhos. */}
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            {/* O Routes é o componente que vai definir as rotas da aplicação. */}
            <Routes>
              {/* O Route é o componente que vai definir uma rota da aplicação. */}
              {/* O elemento path vai definir o caminho da rota. */}
              {/* O elemento element vai definir o componente que será renderizado quando a rota for acessada. */}
              <Route path="/" element={<Summary />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/sales/:id" element={<Sale />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
