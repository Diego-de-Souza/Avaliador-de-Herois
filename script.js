//declaração de variaveis
let nomeHeroi;
let xpHeroi = 0;
//instanciação das variaveis com elementos DOM
let containerText = document.getElementById("textP");
let containerPopup = document.getElementById('pop-up')
let btnSubmit = document.getElementById("btnSubmit")
let btnFechar = document.getElementById('fecharMessage');
let valorInput = document.getElementById("nome_Heroi")
let valorNumberXp = document.getElementById("number_XP")


//Eventos dos botões
btnSubmit.addEventListener("click",(e)=>{
    e.preventDefault()
    nomeHeroi = valorInput.value.toUpperCase();


    let variavelTemporaria =parseInt(valorNumberXp.value);
    if(variavelTemporaria < 1000){
        xpHeroi = "Ferro"
    }else if(variavelTemporaria < 2000){
        xpHeroi = "Bronze"
    }else if(variavelTemporaria < 5000){
        xpHeroi = "Prata"
    }else if(variavelTemporaria < 7000){
        xpHeroi = "Ouro"
    }else if(variavelTemporaria < 8000){
        xpHeroi = "Platina"
    }else if(variavelTemporaria < 9000){
        xpHeroi = "Ascendente"
    }else if(variavelTemporaria < 10000){
        xpHeroi = "Imortal"
    }else {
        xpHeroi = "Radiante"
    } 
    containerText.innerText = `O Herói de nome ${nomeHeroi} está no nível de ${xpHeroi}`;
    containerPopup.style.display="flex";
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${xpHeroi}`)
})
if(nomeHeroi != null){
    
}

btnFechar.addEventListener("click", ()=>{
    containerPopup.style.display = "none";
})

console.log("================= Bem vindo ao Avaliador de heroi")