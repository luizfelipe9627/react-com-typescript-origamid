import "./style.css";
import React from "react";
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";
import Summary from "./pages/Summary";

function App() {
  return (
    <div>
      <Sidenav />
      <main>
        <Header />
        <Summary />
      </main>
    </div>
  );
}

export default App;
