import { UiContextProvider } from "./UiContext";
import Header from "./Header";
import Content from "./Content";

function App() {
  return (
    <UiContextProvider>
      <Header />
      <Content />
    </UiContextProvider>
  );
}

export default App;
