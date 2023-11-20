import React from "react";
import videoSrc from "./assets/video.mp4";

function App() {
  const video = React.useRef<HTMLVideoElement>(null); // Está referenciando o elemento video, dizendo que ele é do tipo HTMLVideoElement e que ele começa com o valor null.

  return (
    <div>
      <div className="flex">
        <button>0</button>
        <button>50</button>
        <button>100</button>
      </div>

      {/* O ref está referênciado e passando o elemento para a variável video, para que possamos manipular esse elemento. */}
      <video controls ref={video} src={videoSrc}></video>
    </div>
  );
}

export default App;
