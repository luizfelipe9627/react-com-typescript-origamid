import React from "react";
import videoSrc from "./assets/video.mp4";
import useLocalStorage from "./useLocalStorage";

function App() {
  const video = React.useRef<HTMLVideoElement>(null); // Está referenciando o elemento video, dizendo que ele é do tipo HTMLVideoElement e que ele começa com o valor null.
  const [volume, setVolume] = useLocalStorage("volume", "0"); // Está chamando o hook personalizado useLocalStorage e passando como parâmetro uma chave e um valor inicial, sendo ambos do tipo string e retornando um array sendo o primeiro elemento uma string e o segundo elemento uma função atualizadora.

  // Criado um efeito colateral que é executado toda vez que o volume mudar.
  React.useEffect(() => {
    if (!video.current) return; // Se o vídeo não existir, não retorna nada, fazendo com que o código abaixo não seja executado.
    
    const volumeNumber = Number(volume); // Está convertendo o volume para number e atribuindo para a variável volumeNumber.

    // Se o volume for maior ou igual a 0 e menor ou igual a 100, executa o if.
    if (volumeNumber >= 0 && volumeNumber <= 100) {
      video.current.volume = volumeNumber / 100; // Está setando o volume do vídeo com o valor do estado dividido por 100, pelo fato do volume do vídeo ser de 0 a 1.
    }
  }, [volume]);

  return (
    <div>
      <div className="flex">
        <button onClick={() => setVolume("0")}>0</button>
        <button onClick={() => setVolume("50")}>50</button>
        <button onClick={() => setVolume("100")}>100</button>
        <button onClick={() => setVolume("200")}>200</button>
      </div>

      {/* O ref está referênciado e passando o elemento para a variável video, para que possamos manipular esse elemento. */}
      <video controls ref={video} src={videoSrc}></video>
    </div>
  );
}

export default App;
