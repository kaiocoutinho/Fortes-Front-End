import { ShowContainers, showIconLoading } from "./iconLoading.mjs";

document.querySelector("#linkRelatorio").addEventListener("click", () => {
  ShowContainers(
    "#containerRelatorio",
    "#containerDivulgacoes",
    "#containerProjects"
  );
});

document.querySelector("#linkDivulgacao").addEventListener("click", () => {
  ShowContainers(
    "#containerDivulgacoes",
    "#containerRelatorio",
    "#containerProjects"
  );
});

document.querySelector("#linkProjects").addEventListener("click", () => {
  ShowContainers(
    "#containerProjects",
    "#containerRelatorio",
    "#containerDivulgacoes"
  );
});

function renderProjects() {
  let name = localStorage.getItem("namePerson");
  let nameProject = localStorage.getItem("nameProject");
  let description = localStorage.getItem("description");
  if(name == null){
    return
  }
  if(nameProject == null){
    return
  }
  if(description == null){
    return
  }
  else{
    showProjects(name, nameProject, description);
    const status = document.querySelector("#status");
    status.classList.add('visible-false')
  }
  
 
}

function showProjects(name, nameProject, description){
  const container = document.querySelector("#projects");
  const divCard = document.createElement('div');
  const divInformarcoes = document.createElement('div')
  divInformarcoes.classList.add("informacoes");

  divCard.classList.add('card');

  const h1 = document.createElement('h1');
  h1.innerHTML = `${nameProject}`;
  h1.classList.add("card-title")

  const h2 = document.createElement('h2');
  h2.innerHTML = "Informações";

  const ul = document.createElement('ul');

  const liName = document.createElement('li');
  liName.innerHTML = `Enviado por: ${name};`

  const liDescription = document.createElement('li');
  liDescription.innerHTML = `Descrição do projeto: ${description}`

  const divButtons = document.createElement('div');
  divButtons.classList.add('buttons');

  const buttonRecused = document.createElement('button');
  buttonRecused.innerText = 'Recusar'
  buttonRecused.id = 'recused';
  buttonRecused.addEventListener("click", () => {
    container.remove(divCard);
    localStorage.clear()                                                                       
  })

  const buttonAproved = document.createElement('button');
  buttonAproved.innerText = 'Aprovar'
  buttonAproved.id = 'aproved';
  buttonAproved.addEventListener("click", () => {
    divButtons.remove(buttonRecused);
    divButtons.remove(buttonAproved);

    alert('Projeto aprovado!')
  })

  divButtons.append(buttonRecused, buttonAproved);



ul.append(liName, liDescription);
divInformarcoes.append(h2,ul, divButtons)
divCard.append(h1,divInformarcoes)
container.append(divCard);

}

function updatesProjects(event){
  const recused = document.querySelector("#recused");
  const aproved = document.querySelector("#aproved");

  recused.addEventListener('click', (container, remove) => {
    container.remove(remove);
    
  })
}


renderProjects();
