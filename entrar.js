function entrar(){
    var senha = document. getElementById ("senha").value;
    var email = document. getElementById ("email").value;
    var email_local = localStorage. getItem ("email");
    var senha_local = localStorage. getItem ("senha");

    if(senha === senha_local && email === email_local){
        alert("Seja bem vindo a StartupInvest!")
        window.location.href = "inicio.html"
    }
    else{
        alert("Senha ou e-mail incorretos, tente novamente!")
    }
}