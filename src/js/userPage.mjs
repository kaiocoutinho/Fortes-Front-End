import { showIconLoading, ShowContainers } from "./iconLoading.mjs";

// EVENTO PARA MOSTRAR NA TELA AS INFORMAÇÕES DA PÁGINA AUXILIO
document.querySelector("#auxilio").addEventListener("click", () => {
  ShowContainers("#auxilios", "#historico", "#register");
});

// EVENTO PARA MOSTRAR NA TELA AS INFORMAÇÕES DA PÁGINA HISTÓRICO
document.querySelector("#historicoLink").addEventListener("click", () => {
  ShowContainers("#historico", "#auxilios", "#register");
});

// EVENTO PARA MOSTRAR NA TELA AS INFORMAÇÕES DA PÁGINA REGISTTRO DE PROJETOS
document.querySelector("#registerLink").addEventListener("click", () => {
  ShowContainers("#register", "#historico", "#auxilios");
});

// EVENTO DE ENVIAR OS DADOS QUE FORAM PREENCHIDOS NO FORMULÁRIO DE ENVIAR PROJETOS
document.querySelector("#formProject").addEventListener("submit", (ev) => {
  ev.preventDefault();
  toSendProject();
});

// FUNÇÃO QUE ENVIAR OS DADOS PASSADOS NO FORMULÁRIO PARA O LOCALSTORAGE
function toSendProject() {
  let name = document.querySelector("#name").value;
  let nameProject = document.querySelector("#nameProject").value;
  let description = document.querySelector("#descriptionProject").value;
  if (name == "") {
    alert("Informe o seu nome!");
    name.focus();
    return;
  }
  if (nameProject == "") {
    alert("Informe o nome do Projeto!");
    nameProject.focus();
    return;
  }
  if (description == "") {
    alert("Dê uma descrição do Projeto!");
    description.focus();
    return;
  }

  showIconLoading();

  localStorage.setItem("namePerson", name);
  localStorage.setItem("nameProject", nameProject)
  localStorage.setItem("description", description)
  name = "";
  nameProject = "";
  description = "";

  console.log(localStorage.getItem("project"));
}
