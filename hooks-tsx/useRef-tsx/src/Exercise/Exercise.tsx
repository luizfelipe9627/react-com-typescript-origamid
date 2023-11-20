import React from "react";
import videoSrc from "/video.mp4";

const Exercise = () => {
  const video = React.useRef<HTMLVideoElement>(null); // Está referenciando o elemento video, dizendo que ele é do tipo HTMLVideoElement e que ele começa com o valor null.

  const [isPlay, setIsPlay] = React.useState(false); // Está criando um estado para o isPlay, e uma função atualizadora chamada setIsPlay. O estado começa com o valor false.
  const [isPlaybackRate, setIsPlaybackRate] = React.useState(false); // Está criando um estado para o isPlaybackRate, e uma função atualizadora chamada setIsPlaybackRate. O estado começa com o valor 1.
  const [isMuted, setIsMuted] = React.useState(false); // Está criando um estado para o isMuted, e uma função atualizadora chamada setIsMuted. O estado começa com o valor false.

  // Função chamada play, que é responsável por dar play e pause no vídeo.
  function play() {
    // Se o isPlay for true, então o vídeo está tocando e deve ser pausado, caso contrário, o vídeo está pausado e deve ser tocado.
    if (isPlay) {
      video.current?.pause(); // Está acessando o elemento video e caso ele exista(?), executa o método pause, responsável por dar pause no vídeo.
      setIsPlay(false); // Está setando o estado isPlay para false, responsável por dizer que o vídeo está pausado.
    } else {
      video.current?.play(); // Está acessando o elemento video e caso ele exista(?), executa o método play, responsável por dar play no vídeo.
      setIsPlay(true); // Está setando o estado isPlay para true, responsável por dizer que o vídeo está tocando.
    }
  }

  // Função chamada forward, que é responsável por avançar 2 segundos no vídeo.
  function forward() {
    if (!video.current) return; // Se o vídeo não existir, então retorna nada, fazendo com que o código abaixo não seja executado.

    video.current.currentTime += 2; // Está acessando o elemento video e executando o método currentTime, responsável por pegar o tempo atual do vídeo e somando com 2 segundos.
  }

  // Função chamada playbackRate1X, que é responsável por setar a velocidade de reprodução do vídeo para 1x.
  function playbackRate() {
    if (!video.current) return; // Se o vídeo não existir, então retorna nada, fazendo com que o código abaixo não seja executado.

    if (isPlaybackRate) {
      video.current.playbackRate = 1; // Está acessando o elemento video e executando o método playbackRate, responsável por pegar a velocidade de reprodução do vídeo e setando para 1x.
      setIsPlaybackRate(false); // Está setando o estado isPlaybackRate para false, responsável por dizer que a velocidade de reprodução do vídeo está em 1x.
    } else {
      video.current.playbackRate = 2; // Está acessando o elemento video e executando o método playbackRate, responsável por pegar a velocidade de reprodução do vídeo e setando para 1x.
      setIsPlaybackRate(true); // Está setando o estado isPlaybackRate para true, responsável por dizer que a velocidade de reprodução do vídeo está em 2x.
    }
  }

  // Função chamada pictureInPicture, que é responsável por entrar e sair do modo PiP.
  function pictureInPicture() {
    if (!video.current) return; // Se o vídeo não existir, então retorna nada, fazendo com que o código abaixo não seja executado.

    // Se o pictureInPictureElement existir, então executa o if.
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture(); // Está acessando o elemento document e executando o método exitPictureInPicture, responsável por sair do modo PiP.
    }

    video.current.requestPictureInPicture(); // Está acessando o elemento video e executando o método requestPictureInPicture, responsável por entrar no modo PiP.
  }

  // Função chamada mute, que é responsável por mutar e desmutar o vídeo.
  function mute() {
    if (!video.current) return; // Se o vídeo não existir, então retorna nada, fazendo com que o código abaixo não seja executado.

    video.current.muted = !video.current.muted; // Está acessando o elemento video e executando o método muted, passando o valor contrário do método muted.
    setIsMuted(!isMuted); // Está setando o estado isMuted para o valor contrário do estado atual.
  }

  return (
    <div>
      <div className="flex">
        <button onClick={play}>{isPlay ? "Pause" : "Play"}</button>
        <button onClick={forward}>+ 2s</button>
        <button onClick={playbackRate}>{isPlaybackRate ? "2X" : "1X"}</button>
        <button onClick={pictureInPicture}>PiP</button>
        <button onClick={mute}>{isMuted ? "D" : "M"}</button>
      </div>

      <video
        src={videoSrc}
        // O ref está referênciado e passando o elemento para a variável video, para que possamos manipular esse elemento.
        ref={video}
        onEnded={() => setIsPlay(false)}
      ></video>
    </div>
  );
};

export default Exercise;
