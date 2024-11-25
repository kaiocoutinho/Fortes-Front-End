import user from "./user.mjs";
import { showIconLoading } from "./iconLoading.mjs";
document.querySelector("#formFuncionario").addEventListener('submit', (ev) => {
    ev.preventDefault()
    const emailAdm = document.querySelector("#emailFuncionario").value;

    const passwordAdm = document.querySelector("#passwordFuncionario").value

    if(emailAdm !== user.EMAILADM){
        alert("Email inválido! informe novamente por favor.");
        return
    }
    if( passwordAdm !== user.PASSWORDADM){
        alert("Senha inválida! Informe novamente por favor.")
        return
    }

    showIconLoading()
    
    setTimeout(() =>{
        window.location.href = './fucionario-home.html'
    }, 3 * 1000)
    
})