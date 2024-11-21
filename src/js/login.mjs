import user from "./user.mjs";
import { showIconLoading } from "./iconLoading.mjs";

const formLogin = document.querySelector("#formLogin");
formLogin.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const emailLogin = document.querySelector("#emailLogin").value;
  const passwordLogin = document.querySelector("#passwordLogin").value;
  if (emailLogin != user.EMAIL) {
    alert("Email errado, digite novamente!");
    return;
  }
  if (passwordLogin != user.PASSWORD) {
    alert("Senha errada, digite novamente!");
    return;
  }

  showIconLoading();
});
