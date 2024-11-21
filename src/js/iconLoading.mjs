export function showIconLoading() {
  const body = document.querySelector("body");
  const videoTag = document.createElement("video");
  videoTag.setAttribute(
    "src",
    "https://github.com/kaiocoutinho/Fortes-Front-End/blob/master/public/Images/Loading%20(1).mp4"
  );
  videoTag.setAttribute("autoplay", true);
  videoTag.setAttribute("loop", true);
  body.appendChild(videoTag);
}
