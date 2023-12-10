import { useUi } from "./UiContext";

const Header = () => {
  const { dark, setDark } = useUi(); // Está desestruturando o valor que foi passado para o UiContext.Provider no componente UiContextProvider.

  console.log(dark); // Imprimindo o valor que foi passado para o UiContext.Provider.

  return <h1>{dark ? "Dark" : "Light"}</h1>;
};

export default Header;
