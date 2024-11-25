import { showIconLoading } from "./iconLoading.mjs";

// EVENTO PARA MOSTRAR NA TELA AS INFORMAÇÕES DA PÁGINA AUXILIO
document.querySelector("#auxilio").addEventListener('click', () => {
    const containerHistoric = document.querySelector("#historico");
    const containerAuxilio = document.querySelector("#auxilios")
    const containerRegister = document.querySelector("#register")

    containerHistoric.classList.add('visible-false');
    containerAuxilio.classList.remove( 'visible-false');
    containerRegister.classList.add('visible-false');
});

// EVENTO PARA MOSTRAR NA TELA AS INFORMAÇÕES DA PÁGINA HISTÓRICO
document.querySelector("#historicoLink").addEventListener('click', () => {
    const containerHistoric = document.querySelector("#historico");
    const containerAuxilio = document.querySelector("#auxilios");
    const containerRegister = document.querySelector("#register");
    

    containerHistoric.classList.remove('visible-false');
    containerAuxilio.classList.add( 'visible-false');
    containerRegister.classList.add('visible-false') ;
    
});

// EVENTO PARA MOSTRAR NA TELA AS INFORMAÇÕES DA PÁGINA REGISTTRO DE PROJETOS
document.querySelector("#registerLink").addEventListener('click' , () =>{
    const containerHistoric = document.querySelector("#historico");
    const containerAuxilio = document.querySelector("#auxilios");
    const containerRegister = document.querySelector("#register");
    

    containerHistoric.classList.add('visible-false');
    containerAuxilio.classList.add( 'visible-false');
    containerRegister.classList.remove('visible-false') ;
})

// EVENTO DE ENVIAR OS DADOS QUE FORAM PREENCHIDOS NO FORMULÁRIO DE ENVIAR PROJETOS
document.querySelector("#formProject").addEventListener('submit', (ev) => {
    ev.preventDefault();
    toSendProject();
})


// FUNÇÃO QUE ENVIAR OS DADOS PASSADOS NO FORMULÁRIO PARA O LOCALSTORAGE
function toSendProject(){
    let name = document.querySelector("#name").value;
    let nameProject = document.querySelector("#nameProject").value;
    let description = document.querySelector("#descriptionProject").value
    if(name == ''){
        alert('Informe o seu nome!');
        name.focus()
        return
    }
    if(nameProject == ''){
        alert('Informe o nome do Projeto!');
        nameProject.focus()
        return;
    }
    if(description == ''){
        alert("Dê uma descrição do Projeto!");
        description.focus()
        return;
    }

    showIconLoading()

    localStorage.setItem('Name', name);
    localStorage.setItem('NameProject', nameProject);
    localStorage.setItem('Description', description);
    name = '';
    nameProject = '';
    description = ''

    console.log(localStorage.getItem('Name'), localStorage.getItem('NameProject'), localStorage.getItem('Description'));
    
}

