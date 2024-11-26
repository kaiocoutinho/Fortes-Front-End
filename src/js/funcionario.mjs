import { ShowContainers, showIconLoading } from "./iconLoading.mjs";

// document.querySelector("#linkRelatorio").addEventListener("click", () => {
//   ShowContainers(
//     "#containerRelatorio",
//     "#containerDivulgacoes",
//     "#containerProjects"
//   );
// });

// document.querySelector("#linkDivulgacao").addEventListener("click", () => {
//   ShowContainers(
//     "#containerDivulgacoes",
//     "#containerRelatorio",
//     "#containerProjects"
//   );
// });

// document.querySelector("#linkProjects").addEventListener("click", () => {
//   ShowContainers(
//     "#containerProjects",
//     "#containerRelatorio",
//     "#containerDivulgacoes"
//   );
// });

function renderProjects() {
  const localStorageData = localStorage.getItem("project");
  const projectArray = JSON.parse(localStorageData);
  const project = [];
  project.push(projectArray);
  console.log(project);
  if (project.length >= 1) {
    let status = document.querySelector("#status");
    status.classList.add("visible-false");
  }
  if (project[0] == null) {
    let status = document.querySelector("#status");
    status.classList.remove("visible-false");
  }
}

renderProjects();
