const videoSrc = "../../public/Images/Loading (1).mp4";

export function showIconLoading() {
  const body = document.querySelector("body");

  const container = document.createElement("div");
  container.id = "container-loading";

  const videoTag = document.createElement("video");
  // Atributos do video
  videoTag.setAttribute("src", videoSrc);
  videoTag.setAttribute("autoplay", true);
  videoTag.setAttribute("loop", true);
  videoTag.setAttribute("width", 300);

  container.appendChild(videoTag);
  body.prepend(container); // Adicionando o video na página

  videoTag.classList.add("video"); //Adicionando CSS ao elemento
  setTimeout(() => {
    body.removeChild(container);
  }, 4 * 1000);
}

export function ShowContainers(Visible, Invisible1, Invisible2) {
  const containerVisible = document.querySelector(Visible);
  const containerInvisible1 = document.querySelector(Invisible1);
  const containerInvisible2 = document.querySelector(Invisible2);

  containerVisible.classList.remove("visible-false");
  containerInvisible1.classList.add("visible-false");
  containerInvisible2.classList.add("visible-false");
}
