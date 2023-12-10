import { useUi } from "./UiContext";

const Content = () => {
  const { dark, setDark } = useUi(); // Está desestruturando o valor que foi passado para o UiContext.Provider no componente UiContextProvider.
  console.log(dark); // Imprimindo o valor que foi passado para o UiContext.Provider.

  return <button onClick={() => setDark((prev) => !prev)}>Mudar tema</button>;
};

export default Content;
