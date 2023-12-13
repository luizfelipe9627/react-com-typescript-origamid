import "./styles/utils/all.css";
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";
import Summary from "./pages/Summary";
import { DataContextProvider } from "./context/DataContext";
import Sales from "./pages/Sales";

function App() {
  return (
    // O DataContextProvider é o componente que vai prover os dados para os componentes filhos.
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Summary />
          <Sales />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
