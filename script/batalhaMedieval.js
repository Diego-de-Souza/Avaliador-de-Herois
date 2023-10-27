let nomeUsuario = document.getElementById("nome_Usuario")
let emailUsuario = document.getElementById("email_Usuario")
let btnSubmit = document.getElementById("btnSubmit")
let btnMonge = document.getElementById("btnMonge")
let btnGuerreiro = document.getElementById("btnGuerreiro")
let btnArqueiro = document.getElementById("btnArqueiro")
let erroInsercaoDados = document.getElementsByClassName('alertError');
let checkBoxMonge = document.getElementById("optionMonge")
let checkGuerreiro = document.getElementById("optionGuerreiro")
let checkArqueiro = document.getElementById("optionArqueiro")
let heroiEscolhido ='';
let novoJogador;
let abreNovaTela = document.getElementById("escolhaGuerreiro")
let novaTela = document.getElementById("batalha")
let dadosJogador = document.getElementById("nomeJogador")
let dadosEmailJogador = document.getElementById("emailJogador")
let dadosHeroiJogador = document.getElementById("nomeHeroiJogador")
let btnAtacar = document.getElementsByClassName("btnAtacar")
let xP = document.getElementsByClassName("XP")
let imagemInimigo = document.getElementById("imgInimigo")

class DadosUsuario {
    
    constructor(nomeUsuario, emailUsuario, tipoGuerreiro){
        this.nomeUsuarioJogo = nomeUsuario
        this.emailUsuarioJogo = emailUsuario
        this.tipoGuerreiroJogo = tipoGuerreiro
        this.xpInimigo = 900000;
        this.situacaoInimigo = "vivo";
    }
    resultadoAtacar(tipoAtaque){
        if(tipoAtaque == "ataque1"){
            this.xpInimigo = this.xpInimigo - 20000
        }else if(tipoAtaque == "ataque2"){
            this.xpInimigo = this.xpInimigo - 80000
        }else if(tipoAtaque == "ataque3"){
            this.xpInimigo = this.xpInimigo - 120000
        }
        if(this.xpInimigo < 1){
            this.xpInimigo = 0
            this.situacaoInimigo = "morto"

        }
    }
}

btnMonge.addEventListener("click",(e)=>{
    e.preventDefault();
    checkBoxMonge.setAttribute('checked','')
    heroiEscolhido = "monge"
    if(checkGuerreiro.checked){
        checkGuerreiro.removeAttribute('checked','')
    }
    if(checkArqueiro.checked){
        checkArqueiro.removeAttribute('checked','')
    }
})

btnGuerreiro.addEventListener("click",(e)=>{
    e.preventDefault();
    checkGuerreiro.setAttribute('checked','')
    heroiEscolhido = "guerreiro"
    if(checkBoxMonge.checked){
        checkBoxMonge.removeAttribute('checked','')
    }
    if(checkArqueiro.checked){
        checkArqueiro.removeAttribute('checked','')
    }
})

btnArqueiro.addEventListener("click",(e)=>{
    e.preventDefault();
    checkArqueiro.setAttribute('checked','')
    heroiEscolhido = "arqueiro"
    if(checkBoxMonge.checked){
        checkBoxMonge.removeAttribute('checked','')
    }
    if(checkGuerreiro.checked){
        checkGuerreiro.removeAttribute('checked','')
    }
})

btnSubmit.addEventListener("click",(e)=>{
    e.preventDefault();
    
    let conferido ="";
    if(nomeUsuario.value.length < 4){
        erroInsercaoDados[0].style.display ="flex"
        nomeUsuario.classList.add("alertErrorInput")
    }else {
        erroInsercaoDados[0].style.display = "none"
        nomeUsuario.classList.remove("alertErrorInput")
        nome = nomeUsuario.value
        conferido += "O";
    }
    //validação do email melhorar a lógica
    function validaEmail(email_Usuario){
        var re = /\S+@\S+\.\S+/;
        return re.test(emailUsuario.value)    
    }
    let validado = validaEmail()
    //não esquecer de incluir a validação na condição
    email = emailUsuario.value
    erroInsercaoDados[1].classList.add("alertErrorInput")
    if(!validaEmail()){
        erroInsercaoDados[1].style.display = "flex"
        emailUsuario.classList.add("alertErrorInput")
    }else{
        erroInsercaoDados[1].style.display = "none"
        emailUsuario.classList.remove("alertErrorInput")
        conferido += "K"
    }
    if(heroiEscolhido.length < 1){
        erroInsercaoDados[2].style.display = "flex"
    }else{
        erroInsercaoDados[2].style.display = "none"
        conferido += "K"
    }
    if(conferido == "OKK"){
        abreNovaTela.style.display = "none"
        novaTela.style.display = "flex"
        novoJogador = new DadosUsuario(nomeUsuario.value,emailUsuario.value,heroiEscolhido);
    }

    dadosJogador.innerText= novoJogador.nomeUsuarioJogo
    dadosEmailJogador.innerText = novoJogador.emailUsuarioJogo
    dadosHeroiJogador.innerText =  novoJogador.tipoGuerreiroJogo
    
})

btnAtacar[0].addEventListener("click",(e)=>{
    e.preventDefault();
    novoJogador.resultadoAtacar("ataque1")
    xP[1].innerText = novoJogador.xpInimigo
    
    if(novoJogador.situacaoInimigo == "morto"){
        imagemInimigo.style.transform = "rotate(-90deg)"
    }
})
btnAtacar[1].addEventListener("click",(e)=>{
    e.preventDefault();
    novoJogador.resultadoAtacar("ataque2")
    xP[1].innerText = novoJogador.xpInimigo
    console.log("botão 2 está funcionando corretamente")
    if(novoJogador.situacaoInimigo == "morto"){
        imagemInimigo.style.transform = "rotate(-90deg)"
    }
})
btnAtacar[2].addEventListener("click",(e)=>{
    e.preventDefault();
    novoJogador.resultadoAtacar("ataque3")
    xP[1].innerText = novoJogador.xpInimigo
    console.log("botão 3 está funcionando corretamente")
    if(novoJogador.situacaoInimigo == "morto"){
        imagemInimigo.style.transform = "rotate(-90deg)"
    }
})

