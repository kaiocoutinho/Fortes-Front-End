const videoSrc = "../../public/Images/Loading (1).mp4";

export function showIconLoading() {
  const body = document.querySelector("body");

  const container = document.createElement("div");
  container.id = "container-loader";

  const videoTag = document.createElement("video");
  // Atributos do video
  videoTag.setAttribute("src", videoSrc);
  videoTag.setAttribute("autoplay", true);
  videoTag.setAttribute("loop", true);
  videoTag.setAttribute("width", 300);

  container.appendChild(videoTag);
  body.appendChild(container); // Adicionando o video na página

  videoTag.classList.add("video"); //Adicionando CSS ao elemento
}
