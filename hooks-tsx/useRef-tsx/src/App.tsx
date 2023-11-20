import React from "react";
import videoSrc from "./assets/video.mp4";

function App() {
  //* > useRef.
  /*
    - Devemos definir o tipo de elemento do useRef<Elemento>, quando utilizamos o mesmo para manipularmos objetos.
  */
  const video = React.useRef<HTMLVideoElement>(null); // Está referenciando o elemento video, dizendo que ele é do tipo HTMLVideoElement e que ele começa com o valor null.

  // O useEffect é executado toda vez que o componente é renderizado, nesse caso, ele está sendo renderizado uma única vez, por conta da array de dependências vazia.
  React.useEffect(() => {
    console.log(video.current); // Acessa o objeto current e mostra o elemento video.
  }, []);

  return (
    <div>
      <div className="flex">
        {/* Quando clicado no botão de play, o onClick acessa o elemento video e caso ele exista(?), executa o método play, responsável por dar play no vídeo. */}
        <button onClick={() => video.current?.play()}>Play</button>
        {/* Quando clicado no botão de pause, o onClick acessa o elemento video e caso ele exista(?), executa o método pause, responsável por dar pause no vídeo. */}
        <button onClick={() => video.current?.pause()}>Pause</button>
      </div>
      {/* O ref está referênciado e passando o elemento para a variável video, para que possamos manipular esse elemento. */}
      <video ref={video} src={videoSrc}></video>
    </div>
  );
}

export default App;
