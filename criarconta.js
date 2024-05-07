function salvarDadosUsuario() {

    // Obter valores do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var data_nascimento = document.getElementById("data_nascimento").value;
    var cpf = document.getElementById("cpf").value;
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmar_senha = document.getElementById("confirmar_senha").value;
    var confirmar_email = document.getElementById("confirmar_email").value;

    // Verifica email e confirmar_email
    if (email !== confirmar_email) {
        alert("Os emails não correspondem.");
        return;
    }
    
    // Verifica senha e confirmar senha
    if (senha !== confirmar_senha) {
        alert("As senhas não correspondem.");
        return;
    }
    // Salva os dados no Storage do Google
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("cpf", cpf);
    localStorage.setItem("data_nascimento", data_nascimento);
    alert("Dados salvos com sucesso!");
    
    // Vai para outra pagina
    window.location.href = "inicio.html";
    return true;
}

